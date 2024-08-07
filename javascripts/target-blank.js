
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href]');
    for (const link of links) {
      if (link.hostname !== location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer'); // Security best practice
      }
    }
  });
  