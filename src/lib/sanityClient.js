import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: '3gdrpofi',
    dataset: 'production',
    apiVersion: '2021-08-31', // use a UTC date string
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.DEV_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);