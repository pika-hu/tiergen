export default {
  async fetch(request, env) {

    // 1. Define your allowed domains here
    const whitelist = [
      "https://pika-hu.github.io" // insert your own domain here
    ];

    const origin = request.headers.get("Origin");

    // 2. Security Check: If the origin isn't in our whitelist, block the request
    // Note: We allow requests with no origin (like typing the URL in a browser) 
    // for testing, but you can remove '!origin' to be even stricter.
    if (origin && !whitelist.includes(origin)) {
      return new Response("Forbidden: This proxy is restricted to authorized domains.", { 
        status: 403 
      });
    }

    const url = new URL(request.url);

    // 1. Get the target URL from the query string (e.g., ?url=https://google.com)
    let targetUrl = url.searchParams.get("url");

    if (!targetUrl) {
      return new Response("Missing 'url' parameter", { status: 400 });
    }

    // 2. Prepare the request to the target site
    // We clone the original request to keep headers/method, but change the URL
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    });

    try {
      // 3. Fetch the data from the target website
      let response = await fetch(modifiedRequest);

      // 4. Create a new response so we can modify the headers
      let newResponse = new Response(response.body, response);

      // 5. Add CORS headers to allow your website to read the data
      newResponse.headers.set("Access-Control-Allow-Origin", "*");
      newResponse.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      newResponse.headers.set("Access-Control-Allow-Headers", "*");

      return newResponse;
    } catch (err) {
      return new Response("Proxy Error: " + err.message, { status: 500 });
    }
  },
};