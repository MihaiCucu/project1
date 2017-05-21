'use strict';

var gamepad = {
    init: function() {
        window.addEventListener('gamepadconnected', this.onConnect);
    },
    controllers: {},
    onConnect: function(e) {
        setInterval(function() {
            gamepad.scan();
        }, 100);
    },

    onDisconnect: function() {

    },

    // scan for any kind of controller interaction and trigger an event for that action
    scan: function() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

        for (var i = 0; i < gamepads.length; i++) {
            if (gamepads[i]) {
                if (!(gamepads[i].index in gamepad.controllers)) {
                    gamepad.controllers[gamepads[i].index] = gamepads[i];
                } else {
                    gamepad.controllers[gamepads[i].index] = gamepads[i];
                }
            }
        }

        for (var j in gamepad.controllers) {
            var controller = gamepad.controllers[j];

            for (var i=0; i<controller.buttons.length; i++) {
                // var b = buttons[i];
                var val = controller.buttons[i];
                var pressed = val == 1.0;

                if (typeof(val) == "object") {
                    pressed = val.pressed;
                    val = val.value;
                }

                if (pressed) {
                    var actualButton = false;

                    switch (i) {
                        case 0:
                            actualButton = 'a';
                            break;
                        case 1:
                            actualButton = 'b';
                            break;
                        case 2:
                            actualButton = 'x';
                            break;
                        case 3:
                            actualButton = 'y';
                            break;
                        case 4:
                            actualButton = 'lb';
                            break;
                        case 5:
                            actualButton = 'rb';
                            break;
                        case 6:
                            actualButton = 'lt';
                            break;
                        case 7:
                            actualButton = 'rt';
                            break;
                        case 8:
                            actualButton = 'back';
                            break;
                        case 9:
                            actualButton = 'forward';
                            break;
                        case 10:
                            actualButton = 'ls';
                            break;
                        case 11:
                            actualButton = 'rs';
                            break;
                        case 12:
                            actualButton = 'up';
                            break;
                        case 13:
                            actualButton = 'down';
                            break;
                        case 14:
                            actualButton = 'left';
                            break;
                        case 15:
                            actualButton = 'right';
                            break;
                    }

                    var eventPressed = new CustomEvent('gamepadPressed', {'detail': {
                        button: actualButton
                    }});

                    document.dispatchEvent(eventPressed)
                }
            }

            // for (var i=0; i<controller.axes.length; i++) {

            //     if (Math.abs(controller.axes[i].toFixed(4)) > 0.5) {
            //         var actualStick;

            //         switch(i) {
            //             case 0:
            //                 actualStick = 'horizontal';
            //                 break;
            //             case 1:
            //                 actualStick = 'vertical';
            //                 break;
            //         }

            //         var eventAxis = new CustomEvent('gamepadAxis', {'detail': {
            //             stick: actualStick,
            //             value: controller.axes[i].toFixed(4)
            //         }});

            //         document.dispatchEvent(eventAxis);
            //     }
            // }
        }
    },
    update: function() {

    }
};

export default gamepad;