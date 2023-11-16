function ToggleTheme(){
  const html = document.documentElement;

  html.classList.toggle('light');
}

function ToggleMenu(){
  const menuToggle = document.querySelector('#slide-menu');

  if (menuToggle.classList.contains('slide-menu-closed')) {
    menuToggle.classList.remove('slide-menu-closed');
    menuToggle.classList.add('slide-menu-opened');
  }else{
    menuToggle.classList.remove('slide-menu-opened');
    menuToggle.classList.add('slide-menu-closed');
  }
}

