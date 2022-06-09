window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('burger-active')
    document.querySelector('#menu').classList.toggle('nav__visible')
    document.querySelector('body').classList.toggle('scroll-stop')
  });

  document.querySelectorAll('.nav__item').forEach(function (deleteClass) {
    deleteClass.addEventListener('click', function (e) {
      document.querySelector('body').classList.remove('scroll-stop')
      document.querySelector('#burger').classList.remove('burger-active')
      document.querySelector('#menu').classList.remove('nav__visible')
    });
  });
});
