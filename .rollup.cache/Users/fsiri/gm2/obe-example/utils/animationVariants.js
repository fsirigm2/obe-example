export var variants = function (x, opacity) {
    if (x === void 0) { x = 1000; }
    if (opacity === void 0) { opacity = 0; }
    return ({
        enter: function (direction) {
            return {
                x: direction > 0 ? x : -x,
                opacity: opacity,
            };
        },
        center: {
            x: 0,
            opacity: 1,
        },
        exit: function (direction) {
            return {
                x: direction < 0 ? x : -x,
                opacity: opacity,
            };
        },
    });
};
//# sourceMappingURL=animationVariants.js.map