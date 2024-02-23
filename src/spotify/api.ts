import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { spotifyClientId, spotifyRedirectUri } from '~/config/env';

export const { search } = SpotifyApi.withUserAuthorization(
  spotifyClientId,
  spotifyRedirectUri,
  ['user-read-private', 'user-read-email'],
);
