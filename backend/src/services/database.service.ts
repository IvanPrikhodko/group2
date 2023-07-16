// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { incidents?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env['DB_CONN_STRING'] || '');

    await client.connect();

    const db: mongoDB.Db = client.db(process.env['DB_NAME'] || '');

    const incidentsCollection: mongoDB.Collection = db.collection(process.env['INCIDENTS_COLLECTION_NAME'] || '');

    collections.incidents = incidentsCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${incidentsCollection.collectionName}`);
}
