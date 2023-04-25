// const WIDTH_VALUE = `calc(100% / var(${CURRENT_POS}));`;
const DELTA_TIME_ORDER_ITEMS = 500; //Miliseconds for waiting the functions "resizeElements" call

let timerForOrdering;

const ordersAgain = () => {
    //Get the first item width. All items have the same width
    currentItemWidth = itemsContainer.children[0].clientWidth;

    //Scroll through all elements to resize them to the new browser window width and move them to maintain the same order
    Array.from(itemsContainer.children).forEach(item => {
        // item.style.minWidth = WIDTH_VALUE; //Resizing
        moveItems(currentItemWidth * currentItemPos); //Moving
    });
}