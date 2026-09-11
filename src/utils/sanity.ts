import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '4cry3z15',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'skS2lY2ePNLIK1hYbMhk5rJOB0MDPD9jgCv7ONF5zp39As0m9myIhn56P0b4bYQ7yXi1US16SxWo2JREkDUSD04WcoeBjTBIL6wAFb8WfUGGxxOtzjQ04eY3Ke6xCAeUr5zSCOx7ruRcSiNfS0ywXFnawrlc4JL8xWbU3v07vMNKDHAshXCr',
});
const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
