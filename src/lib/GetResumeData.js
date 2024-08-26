// lib/getResumeData.js
import clientPromise from "@/lib/mongodb";

export async function getResumeData() {
    console.log('GetResume started');

    try {
        console.log('why');
        const client = await clientPromise;
        console.log(client);
        const db = client.db('website');
        console.log(db);
        const data = await db.collection('resume').findOne({});
        console.log(data);
        console.log('GetResume finished');
        return {
            props: { data: JSON.parse(JSON.stringify(data)) },
        };
    } catch (e) {
        console.error(e);
        return {
            props: { data: [] },
        };
    }
}
