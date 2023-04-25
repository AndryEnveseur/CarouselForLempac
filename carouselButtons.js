const CURRENT_POS = '--max-items-displayed'; //CSS variable
const EVENT_LISTENER = 'click'; //For add 'click' event to "previous" and "next" buttons
const carouselContainer = document.querySelector('.carousel-container');
let itemsContainer = document.querySelector('.carousel-items-container');

const previousItemButton = carouselContainer.querySelector('.carousel-button-previous');
const nextItemButton = carouselContainer.querySelector('.carousel-button-next');

let maxItemsDisplayed = parseInt(getComputedStyle(carouselContainer).getPropertyValue(CURRENT_POS));

let currentItemWidth = itemsContainer.children[0].clientWidth;
let currentItemPos = 0; //Controls the current position to be used as a limiter for both buttons (previous and next)

//Move item for each click on "previous" and "next" carousel's buttons
const moveItems = (distance, direction) => itemsContainer.style.transform = `translateX(${distance * direction}px)`;

//Create the 'click' event for 'previous' button
previousItemButton.addEventListener(EVENT_LISTENER, () => {
    currentItemPos--;

    if (currentItemPos > -1) {
        moveItems(currentItemWidth * currentItemPos, -1);
        return;
    }

    currentItemPos++;
});

const childrenItemsContainer = itemsContainer.children;
const MAX_CAROUSEL_ITEMS = childrenItemsContainer.length;
let maxItemsContainerWidth;

nextItemButton.addEventListener(EVENT_LISTENER, () => {
    maxItemsContainerWidth = currentItemWidth * MAX_CAROUSEL_ITEMS;

    if (currentItemWidth * (currentItemPos + 1) <= maxItemsContainerWidth - currentItemWidth * maxItemsDisplayed) {
        currentItemPos++;
        moveItems(currentItemWidth * currentItemPos, -1);

        return;
    }
});

