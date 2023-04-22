const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', (event) => {
      imageNum = 10;
    addNewImg();
});

function addNewImg() {
   for(let i = 0; i<imageNum; i++) {
      let imageEl = document.createElement('img');
      imageEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random() *2000)}`;
      imageContainerEl.appendChild(imageEl);
   }
}
