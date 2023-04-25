const DELTA_TIME_UPDATE_CURRENT_POSITION = 300; //Miliseconds for waiting the functions "resizeElements" call
let timer

// currentItemPos
const updateCurrentPos = () => {
    itemsContainer.style.transform = `translateX(${0}px)`;
    currentItemPos = 0;
}

// filter: brightness(0.6);
