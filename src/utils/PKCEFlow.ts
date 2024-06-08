const tokenEndpoint = "https://accounts.spotify.com/api/token";

const generateRandomString = (length: number) => {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };
  
  const sha256 = async (plain: string): Promise<ArrayBuffer> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  };
  
  const base64encode = (input: ArrayBuffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };
  
  const getToken = async (
    code: string,
    clientId: string,
    redirectUri: string
  ) => {
    const codeVerifier = localStorage.getItem("code_verifier");
  
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    };
  
    const body = await fetch(tokenEndpoint, payload);
    const response = await body.json();
    localStorage.setItem("access_token", response.access_token);
  };
  
  export { generateRandomString, sha256, base64encode, getToken };
  