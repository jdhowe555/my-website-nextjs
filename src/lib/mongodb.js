import { MongoClient } from 'mongodb';

let clientPromise;

// Connect only when server-side data is requested, not during next build.
export default function getMongoClient() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('Please add your Mongo URI to .env.local');
    }

    if (process.env.NODE_ENV === 'development') {
        if (!global._mongoClientPromise) {
            global._mongoClientPromise = new MongoClient(uri).connect().catch(error => {
                global._mongoClientPromise = undefined;
                throw error;
            });
        }
        return global._mongoClientPromise;
    }

    if (!clientPromise) {
        clientPromise = new MongoClient(uri).connect().catch(error => {
            clientPromise = undefined;
            throw error;
        });
    }
    return clientPromise;
}
