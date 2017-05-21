'use strict';

const nav = {
    init: function() {
        let gamepadTimer = false;

        // the item which is currently active in the grid
        function getCurrentActive () {
            var activeEl = document.querySelectorAll('.active');

            return  activeEl.length > 0 ? activeEl[0] : false;
        }

        // get the elements closest to the active element
        function getAdjacentElems(current) {
            var currentRect = current.getBoundingClientRect(),
                navGridItems = document.querySelectorAll('.nav-item'),
                adjacentElems = {},
                gridRectArray = [];

            // used in the loop
            var gridItemRect = '',
                topDifVal = 0,
                topRefVal = 0,
                leftDifVal = 0,
                leftRefVal = 0;

            for (var i = 0; i < navGridItems.length; i++) {
                gridRectArray.push(navGridItems[i].getBoundingClientRect());
            }

            adjacentElems = getClosestElems({
                navItems: navGridItems,
                navItemsRect: gridRectArray,
                current: current,
                currentRect: currentRect
            });

            return adjacentElems;
        }

        // closest element from right
        function getClosestElems(config) {
            var items = config.navItems,
                itemsPosArray = config.navItemsRect,
                current = config.current,
                currentPos = {
                    x: config.currentRect.left,
                    y: config.currentRect.top,
                    w: config.currentRect.width,
                    h: config.currentRect.height
                },
                adjElem = {},
                itemPosition = {},
                yDifVal = false,
                xDifVal = false,
                xRightDifVal = false,
                yRightDifVal = false,
                xTopDifVal = false,
                yTopDifVal = false;

            // debug vars
            var topItems = [],
                rightItems = [];

            for (var i = 0, l = itemsPosArray.length; i < l; i++) {
                itemsPosArray[i] = {
                    x: config.navItemsRect[i].left,
                    y: config.navItemsRect[i].top,
                    w: config.navItemsRect[i].width,
                    h: config.navItemsRect[i].height
                };

                itemPosition = itemsPosArray[i];

                // find the items from above
                if (currentPos.y > itemPosition.y) {

                    if (yTopDifVal === false) {
                        yTopDifVal = Math.abs(currentPos.y - (itemPosition.y + itemPosition.h));
                    }

                    if (yTopDifVal >= Math.abs(currentPos.y - (itemPosition.y + itemPosition.h))) {

                        if (xTopDifVal === false
                            || yTopDifVal > Math.abs(currentPos.y - (itemPosition.y + itemPosition.h))) {

                            xTopDifVal = Math.abs(currentPos.x - itemPosition.x);
                        }

                        if(xTopDifVal >= Math.abs(currentPos.x - itemPosition.x)
                                || Math.abs(currentPos.x - itemPosition.x) === 0) {

                            adjElem.up = items[i];
                            xTopDifVal = Math.abs(currentPos.x - itemPosition.x);
                        }

                        yTopDifVal = Math.abs(currentPos.y - (itemPosition.y + itemPosition.h));
                    }
                }

                // find the items from below
                if (currentPos.y + currentPos.h < itemPosition.y) {

                    if (yDifVal === false) {
                        yDifVal = Math.abs(itemPosition.y - currentPos.y);
                    }

                    if (yDifVal >= Math.abs(itemPosition.y - currentPos.y)) {

                        if (xDifVal === false) {
                            xDifVal = Math.abs(currentPos.x - itemPosition.x);
                        }

                        if (xDifVal >= Math.abs(currentPos.x - itemPosition.x)
                            || Math.abs(currentPos.x - itemPosition.x) === 0) {

                            adjElem.down = items[i];
                            xDifVal = Math.abs(currentPos.x - itemPosition.x);
                        }

                        yDifVal = Math.abs(itemPosition.y - currentPos.y);
                    }
                }

                // find the items from the left
                if (currentPos.x > itemPosition.x) {

                    if (currentPos.y >= itemPosition.y
                        || currentPos.y + currentPos.h >= itemPosition.y + itemPosition.h) {
                        adjElem.left = items[i];
                    }
                }

                // all elements from the right
                if (currentPos.x + currentPos.w < itemPosition.x + itemPosition.w) {

                    if (yRightDifVal === false) {
                        yRightDifVal = Math.abs(currentPos.y - itemPosition.y);
                    }

                    if (yRightDifVal > Math.abs(currentPos.y - itemPosition.y)
                        || Math.abs(currentPos.y - itemPosition.y) === 0) {

                        if (yRightDifVal > Math.abs(currentPos.y - itemPosition.y)) {
                            xRightDifVal = Math.abs((itemPosition.x + itemPosition.w) - (currentPos.x + currentPos.w));
                        }

                        if (xRightDifVal === false) {
                            xRightDifVal = Math.abs((itemPosition.x + itemPosition.w) - (currentPos.x + currentPos.w));
                        }

                        if (xRightDifVal >= Math.abs((itemPosition.x + itemPosition.w) - (currentPos.x + currentPos.w))) {
                            adjElem.right = items[i];
                        }

                        yRightDifVal = Math.abs(currentPos.y - itemPosition.y);
                    }
                }
            }

            return adjElem;
        }

        function keyboardHandler (e) {
            var keyName = e.keyIdentifier;

            if (keyName.indexOf('Right') > -1
                || keyName.indexOf('Left') > -1
                || keyName.indexOf('Up') > -1
                || keyName.indexOf('Down') > -1) {

                handleDirectionNav(keyName.toLowerCase());
            } else {
                return;
            }
        }

        function gamepadHandler(e) {
            let pressedBtn = e.detail.button;

            if (!gamepadTimer) {
                gamepadTimer = setTimeout(function() {
                    if (pressedBtn == 'up'
                            || pressedBtn == 'down'
                            || pressedBtn == 'left'
                            || pressedBtn == 'right') {

                        handleDirectionNav(pressedBtn);
                    }

                    gamepadTimer = false;
                }, 250);
            }
        }

        // handler for the keyboard direction navigation
        function handleDirectionNav(direction) {
            var activeEl = getCurrentActive(),
                adjacentElems = false;

            if (!activeEl) {
                document.querySelectorAll('.nav-item')[0].classList.add('active');
                return;
            }

            adjacentElems = getAdjacentElems(activeEl);

            if (adjacentElems[direction]) {
                activeEl.classList.remove('active');
                adjacentElems[direction].classList.add('active');
            }
        }

        document.addEventListener('gamepadPressed', gamepadHandler);
        document.addEventListener('keyup', keyboardHandler);
    }
}

export default nav;
