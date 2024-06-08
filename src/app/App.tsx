import { useEffect } from "react";
import Player from "../features/music-player/Player";
import { generateRandomString, sha256, base64encode, getToken } from "../utils/PKCEFlow";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const redirectUri = "http://localhost:5173/callback";
const scope = "user-read-private";
const authUrl = new URL("https://accounts.spotify.com/authorize");



function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  useEffect(() => {
    if (code) {
      getToken(code, clientId, redirectUri);
    } else {
      (async () => {
        const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
  });

  const data = await response.json();
  console.log(data);
      })();
    }
  }, [code]);

  const login = () => {
    (async () => {
      const codeVerifier = generateRandomString(64);
      const hashed = await sha256(codeVerifier);
      const codeChallenge = base64encode(hashed);
      const params = {
        response_type: "code",
        client_id: clientId,
        scope,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
      };
      window.localStorage.setItem("code_verifier", codeVerifier);
      authUrl.search = new URLSearchParams(params).toString();
      window.location.href = authUrl.toString();
    })();
  };

  return (
    <>
      <div>test</div>
      <Player />
      <button onClick={login}>Login</button>
    </>
  );
}

export default App;
