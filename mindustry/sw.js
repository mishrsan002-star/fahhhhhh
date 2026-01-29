self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('assets.txt')) {
    event.respondWith(
      fetch('https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/mindustry/assets/assets.txt')
    );
  }
});