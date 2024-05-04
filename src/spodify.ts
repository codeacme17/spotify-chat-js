import Spotify from "spotify-api.js";
import fetch from "node-fetch";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error("Missing Spotify client ID or client secret");
}

const authBuffer = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET);

const response = await fetch('https://accounts.spotify.com/api/token', {
  method: "POST",
  headers: {
    'Authorization': 'Basic ' + (authBuffer.toString('base64')),
    'content-type': 'application/x-www-form-urlencoded',
  },
  body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
})

const { access_token } = await response.json();

const client = new Spotify.Client({token: access_token});

export const findSongByLyrics = async (lyrics: string) => {
  try {
    const res = await client.search(`lyrics:${lyrics}`, {types: ['track']});

    if(res) {
      const songURI = res.tracks![0].uri;
      return songURI
    }

  } catch (error) {
    console.error(error);
  }
}

