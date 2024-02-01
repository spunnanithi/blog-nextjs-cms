import { client } from "./client";

async function sanityFetch(query, params = {}) {
  return client.fetch(query, params, { next: { revalidate: 60 } });
}

export default sanityFetch;
