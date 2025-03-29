import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config";

const pineconeClientInstance = new Pinecone({
  apiKey: env.PINECONE_API_KEY,
});

// let pineconeClientInstance: PineconeClient | null = null;

// const client = new Pinecone({
//     apiKey: process.env.PINECONE_API_KEY,
//     environment: process.env.PINECONE_ENVIRONMENT, // Example: "us-east1-gcp"
//   });
