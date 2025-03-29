import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config";

const pineconeClientInstance = new Pinecone({
  apiKey: env.PINECONE_API_KEY,
});

const initPineconeClient = async (): Promise<unknown> => {
  const pineconeClient = await pineconeClientInstance.init({
    apiKey: env.PINECONE_API_KEY,
    environment: env.PINECONE_ENVIRONMENT,
  });
};
