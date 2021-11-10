import { createClient } from 'contentful'

/**
 * Create contentful client instance.
 *
 * @returns {ContentfulClientApi}
 */
export function getContentfulClient() {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('variable envs missing...')
  }

  return createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  })
}

