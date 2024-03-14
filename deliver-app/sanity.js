import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "edpp08uq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// helper function to get image url
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
