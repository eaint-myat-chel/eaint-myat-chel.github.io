const gallery = document.querySelector('#certificate-gallery');
const filters = gallery.querySelector('.certificate-filters');
const buttons = filters.querySelectorAll('[data-issuer-filter]');
const groups = gallery.querySelectorAll('[data-issuer]');

filters.hidden = false;

filters.addEventListener('click', (event) => {
  const selected = event.target.closest('[data-issuer-filter]');
  if (!selected) return;

  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  const issuer = selected.dataset.issuerFilter;
  for (const group of groups) {
    group.hidden = issuer !== 'all' && group.dataset.issuer !== issuer;
  }
});
