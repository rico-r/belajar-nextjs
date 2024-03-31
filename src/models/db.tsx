import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URI);

const db = client.db(process.env.DATABASE_NAME);

export default db;

export function collections(collectionName: string) {
    return db.collection(collectionName);
}