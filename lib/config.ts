import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();  // Load environment variables

const envSchema = z.object({
  OPENAI_API_KEY: z.string().trim().min(1),
  PINECONE_API_KEY: z.string().trim().min(1),
  PINECONE_ENVIRONMENT: z.string().trim().min(1),
  PINECONE_INDEX_NAME: z.string().trim().min(1).optional(),  
  PDF_PATH: z.string().trim().min(0),
  INDEX_INIT_TIMEOUT: z.coerce.number().min(1),
});

const env = envSchema.parse(process.env);
export { env };