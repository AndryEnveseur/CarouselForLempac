const CLASS_CAROUSEL_BIGGER_ITEM_HIDDEN = 'carousel-bigger-item-hidden';

//Makes the images of the carousel elements larger
const doBiggerImage = (element) => {
    //Parent element where the clicked image will be displayed
    const modelBiggerItem = document.querySelector('.carousel-bigger-item');
    const imageContainer = modelBiggerItem.querySelector('div'); //Where the image will put it
    imageContainer.style.backgroundImage = `url(${element.querySelector('img').src})`; //URL sended from the same clicked image
    modelBiggerItem.classList.remove(CLASS_CAROUSEL_BIGGER_ITEM_HIDDEN); //Do visible
} 

//Hide the elements showing the zoomed image
const closeBiggerImage = (element) => element.classList.add(CLASS_CAROUSEL_BIGGER_ITEM_HIDDEN);