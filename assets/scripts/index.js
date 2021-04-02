const accordionTitle = document.querySelectorAll('.js-accordion__title');

// TODO: itu diteken beberapa masih kebuka semua
accordionTitle.forEach((acc) => {
  acc.addEventListener('click', toggleActive);
});

function toggleActive() {
  this.classList.toggle('accordion__title-active');
}
