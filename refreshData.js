let refreshingElements;
const DELTA_TIME_REFRESH_ELEMENTS = 300;

const refreshElements = () => {
    itemsContainer = document.querySelector('.carousel-items-container');
    currentItemWidth = itemsContainer.children[0].offsetWidth;
    maxItemsDisplayed = parseInt(getComputedStyle(carouselContainer).getPropertyValue(CURRENT_POS));
}