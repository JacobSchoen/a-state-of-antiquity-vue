import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: '3gdrpofi',
    dataset: 'production',
    useCdn: process.env.NODE_ENV === 'production',
});