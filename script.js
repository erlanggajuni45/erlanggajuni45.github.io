document.addEventListener('DOMContentLoaded', function () {
  (() => {
    fetch('/data/icons.json')
      .then((response) => response.json())
      .then((data) => {
        const container = document.getElementById('tech-icon-section');
        data.forEach((item) => {
          const link = document.createElement('a');
          link.href = '#skills';
          link.className =
            'group max-w-[120px] mx-4 py-4 opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 hover:-translate-y-5';

          const img = document.createElement('img');
          img.src = `img/skill/${item.icon}`;
          img.alt = item.name;

          const paragraph = document.createElement('p');
          paragraph.className =
            'pt-2 opacity-0 text-center text-base text-white group-hover:opacity-100 duration-500';
          paragraph.textContent = item.name;

          link.appendChild(img);
          link.appendChild(paragraph);
          container.appendChild(link);
        });
      });
  })();
});

window.onscroll = function () {
  const header = document.querySelector('header');
  const toTop = document.querySelector('#to-top');
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  nav.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != nav) {
    hamburger.classList.remove('hamburger-active');
    nav.classList.add('hidden');
  }
});

// dark toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// dark mode or not
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkToggle.checked = true;
}
