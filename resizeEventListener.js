//Resize window's event
window.addEventListener('resize', () => {
    clearTimeout(timerForOrdering);
    timerForOrdering = setTimeout(ordersAgain, DELTA_TIME_ORDER_ITEMS);

    clearTimeout(timer);
    timer = setTimeout(updateCurrentPos, DELTA_TIME_UPDATE_CURRENT_POSITION);
});