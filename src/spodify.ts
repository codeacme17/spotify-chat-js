import { SpotifyApi } from "@spotify/web-api-ts-sdk";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error("Missing Spotify client ID or client secret");
}

const sdk = SpotifyApi.withClientCredentials(
  CLIENT_ID, 
  CLIENT_SECRET, 
  ['playlist-modify-public', 'user-modify-playback-state']
);

console.log("sdk.currentUser", sdk.currentUser.tracks.hasSavedTracks(["3cQO7jp5S9qLBoIVtbkSM1"]));

export const findSongByName = async (name: string) => {
}

export const skipNext = async () => {
  return "Skipped to next song";
}

export const startPlayingSongByLyrics= async (lyrics: string) => {
  try {
    const songURI = await _findSongByLyrics(lyrics);

    return `Started playing song with lyrics: ${lyrics}`
  } catch (error) {
    console.error(error);
    return "Failed to start playing song";
  }
}

const _findSongByLyrics = async (lyrics: string) => {
  try {

  } catch (error) {
    console.error(error);
  }
}
