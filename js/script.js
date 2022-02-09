const characters = document.querySelector('.characters--wrapper');
let characterImage = document.querySelector('.character-image img');
let characterItems = characters.querySelectorAll('dt');
let charsArr = Array.from(characterItems);
let activeCharacter = characters.querySelector('.active');

charsArr.forEach(function (item, i) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    activeCharacter.classList.remove('active');
    item.classList.add('active');
    characterImage.setAttribute('src', `/images/${item.getAttribute('id')}.png`);
    console.log(characterImage);
    activeCharacter = item;
  })
})
