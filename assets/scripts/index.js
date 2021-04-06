const accordionTitle = document.querySelectorAll('.js-accordion__title');

accordionTitle.forEach((acc) => {
  acc.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('accordion__title-active');
  });
});
