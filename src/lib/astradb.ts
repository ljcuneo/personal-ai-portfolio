import { AstraDB } from "@datastax/astra-db-ts";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "https://1a52e137-f4c2-409f-8b46-7cd0b3158e65-us-east-2.apps.astra.datastax.com";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "AstraCS:luJaGdWblPEUuinmrfysaZLl:f9c32bf73d55cf069ca6b4f029857b1a30587d70a9e32f478189eda2b1d9a723";
const collection = process.env.ASTRA_DB_COLLECTION || "embeddings";

if (!token || !endpoint || !collection) {
  throw new Error(
    "Please set ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, and ASTRA_DB_COLLECTION environment variables.",
  );
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: {
          dimension: 1536,
          metric: "cosine",
        },
      },
    },
  );
}

export async function getEmbeddingsCollection() {
  const db = new AstraDB(token, endpoint);
  console.log('astradb_db', db);
  // await db.createCollection(collection)
  const cl = await db.collection(collection);
  console.log('collection', cl);
  return cl;
}

getEmbeddingsCollection().catch(console.error)
