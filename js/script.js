const animatable = document.querySelectorAll('.anim');
// characters
const characters = document.querySelector('.characters--wrapper');
let characterImage = document.querySelector('.character-image img');
let characterItems = characters.querySelectorAll('dt');
let charsArr = Array.from(characterItems);
let activeCharacter = characters.querySelector('.active');
// email
const email = document.querySelector('.address');
let efirst = 'cactus.production.info';
let elast = 'gmail.com';

email.href = `mailto:${efirst}@${elast}`;
email.innerHTML = 'cactus.production.info@gmail.com';

charsArr.forEach(function (item, i) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    activeCharacter.classList.remove('active');
    item.classList.add('active');
    characterImage.setAttribute('src', `/images/${item.getAttribute('id')}.png`);
    activeCharacter = item;
    characterImage.style.animation = 'none';
    characterImage.style.opacity = '0';
    if (item.classList.contains('active')) {
      setTimeout(
        charSwitch
        ), 3000;
      }
    })
  })
  
  let uiAnimOptions = {
    rootMargin: '0px',
    threshold: 0
  }
  function charSwitch() {
    characterImage.style.animation = 'fadeIn 1s ease-out .25s forwards';
  }
  
  function animSet(itemTarget) {
    itemTarget.style.animation = `${itemTarget.dataset.animtype} .5s ease-out ${itemTarget.dataset.delay} forwards`;
  }
  function animNoDelaySet(itemTarget) {
    itemTarget.style.animation = `${itemTarget.dataset.animtype} .5s ease-in-out forwards`;
  }
  
  let uiAnim = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.target.dataset.delay === undefined){
        animNoDelaySet(entry.target);
        if(entry.target.dataset.once) {
          animNoDelaySet(entry.target);
          uiAnim.unobserve(entry.target);
        }
      } 
      else if(entry.isIntersecting) {
        animSet(entry.target);
        if(entry.isIntersecting && entry.target.dataset.once) {
          animSet(entry.target);
          uiAnim.unobserve(entry.target);
        }
        return;
      } 
      else {
        entry.target.style.animation = 'none';
        return;
      }
      
    })
  }, uiAnimOptions);
  animatable.forEach(itm => {
    uiAnim.observe(itm);
  });

