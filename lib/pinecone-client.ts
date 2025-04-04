import {
  Pinecone,
  type PineconeConfiguration,
} from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

const pineconeClientInstance = new Pinecone({
  apiKey: env.PINECONE_API_KEY,
});

await pineconeClientInstance.createIndex({
  name: "sample-index",
  dimension: 1536,
  metric: "cosine",
  spec: {
    serverless: {
      cloud: "gcp",
      region: env.PINECONE_ENVIRONMENT,
    },
  },
  tags: { team: "data-science" },
});

