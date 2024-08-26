// lib/getResumeData.js
import clientPromise from "@/lib/mongodb";

export async function getResumeData() {
    try {
        const client = await clientPromise;
        const db = client.db('website');

        const data = await db.collection('resume').findOne({});

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
