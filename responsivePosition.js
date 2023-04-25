const DELTA_TIME_UPDATE_CURRENT_POSITION = 300; //Miliseconds for waiting the functions "resizeElements" call
let updatingCarouselPos, width, lastWidthChanged;

const checkIfReInitIsNeeded = () => {
    itemsContainer.style.transform = `translateX(${0}px)`;
    currentItemPos = 0;
}
