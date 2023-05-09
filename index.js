export default {
  async fetch(request) {
    const externalHostname = "example.com";

    const redirectMap = new Map([
      ["/short1", "link1"],
    ]);

    const requestURL = new URL(request.url);
    const path = requestURL.pathname;
    const location = redirectMap.get(path);

    if (location) {
      return Response.redirect(location, 301);
    }
    // If request not in map, return the original request
    return fetch(request);
  },
};