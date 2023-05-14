import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: '3gdrpofi',
    dataset: 'production',
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.DEV_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);