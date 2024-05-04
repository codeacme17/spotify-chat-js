import { SpotifyApi } from '@spotify/web-api-ts-sdk';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error('Missing Spotify client ID or client secret');
}

const sdk = SpotifyApi.withClientCredentials(CLIENT_ID, CLIENT_SECRET, [
  'playlist-modify-public',
  'user-modify-playback-state',
]);

export const findSongByName = async (name: string) => {
  const res = await sdk.search(name, ['track']);
  return res.tracks.items[0].uri;
};

export const skipNext = async () => {
  return 'Skipped to next song';
};

export const findSongByLyrics = async (lyrics: string) => {
  try {
    const res = await sdk.search(`lyrics:${lyrics}`, ['track']);
    console.log(res.tracks.items[0].uri);
    return res.tracks.items[0].uri;
  } catch (error) {
    console.error(error);
    return 'No song found';
  }
};
