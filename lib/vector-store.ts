import { env } from "./config";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { Document } from "@langchain/core/documents";
import { PineconeStore } from "@langchain/pinecone";

export const embedAndStoreDocs = async (
  client: Pinecone,
  docs: Document<Record<string, any>>[]
) => {
  try {
    if (!env.PINECONE_INDEX_NAME) {
      throw new Error("PINECONE_INDEX_NAME is not defined");
    }

    const embeddings = new OpenAIEmbeddings();
    const index = client.Index(env.PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
    });

    await vectorStore.addDocuments(docs);
    return vectorStore;
  } catch (error) {
    console.error("Error embedding documents:", error);
    throw error;
  }
};
