//Resize window's event
window.addEventListener('resize', () => {
    clearTimeout(timerForOrdering);
    timerForOrdering = setTimeout(ordersAgain, DELTA_TIME_ORDER_ITEMS);

    clearTimeout(updatingCarouselPos);
    updatingCarouselPos = setTimeout(checkIfReInitIsNeeded, DELTA_TIME_UPDATE_CURRENT_POSITION);

    clearTimeout(refreshingElements);
    refreshingElements = setTimeout(refreshElements, DELTA_TIME_REFRESH_ELEMENTS);
});