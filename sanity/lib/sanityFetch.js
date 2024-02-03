import { client } from "./client";

async function sanityFetch(query, params = {}) {
  return client.fetch(query, params, { next: { revalidate: 15 } });
}

export default sanityFetch;
