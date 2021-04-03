const accordionTitle = document.querySelectorAll('.js-accordion__title');

accordionTitle.forEach((acc) => {
  acc.addEventListener('click', toggleActive);
});

function toggleActive() {
  accordionTitle.forEach((acc) => {
    acc.classList.remove('accordion__title-active');
  });
  this.classList.add('accordion__title-active');
}
