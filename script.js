const toActive = document.querySelectorAll(".media");

toActive.forEach(medias => {
  medias.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    medias.classList.add('active');
  });
});