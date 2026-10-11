import getMongoClient from '@/lib/mongodb';

export async function getResumeData() {
    const client = await getMongoClient();
    const data = await client.db('website').collection('resume').findOne({});

    if (!data) {
        return { notFound: true };
    }

    return {
        props: { data: JSON.parse(JSON.stringify(data)) },
    };
}
