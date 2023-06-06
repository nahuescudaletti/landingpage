const cards = document.querySelectorAll('.cardtn');

Array.from(cards).map(card => {
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
})

function startRotate(e){
    const cardItem = this.querySelector('.card-itemtn');
    const halfHeight = cardItem.offsetHeight / 2 ;
    const rotateX = `rotateX(${-(e.offsetY - halfHeight) / 3.5}deg)`;
    const rotateY = `rotateY(${(e.offsetX - halfHeight) / 3.5}deg)`;
    cardItem.style.transform = `${rotateX}${rotateY}`;
}
function stopRotate(){
    const cardItem = this.querySelector('.card-itemtn');
    cardItem.style.transform = `rotateX(0) rotateY(0)`;
}