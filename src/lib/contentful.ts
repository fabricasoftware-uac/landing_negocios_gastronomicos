import { createClient } from 'contentful';

// Make sure to define these variables in your .env or .env.local file:
// VITE_CONTENTFUL_SPACE_ID=your_space_id
// VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});
