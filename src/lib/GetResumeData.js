// lib/getResumeData.js
import clientPromise from "@/lib/mongodb";

export async function getResumeData() {
    console.log('GetResume started');

    try {
        const client = await clientPromise;
        const db = client.db('website');

        const data = await db.collection('resume').findOne({});

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
