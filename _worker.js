export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Only redirect root path
    if (path === '/' || path === '/index.html') {
      const acceptLang = request.headers.get('Accept-Language') || '';
      const isItalian = acceptLang.toLowerCase().startsWith('it');
      const target = isItalian ? '/index-it.html' : '/index-en.html';
      return Response.redirect(new URL(target, url.origin), 302);
    }

    // All other paths: serve normally
    return env.ASSETS.fetch(request);
  }
}
