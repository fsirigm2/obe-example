var checkInViewIntersectionObserver = function (_a) {
    var target = _a.target, _b = _a.options, options = _b === void 0 ? { root: null, rootMargin: "0%", threshold: 0 } : _b, callback = _a.callback, _c = _a.freezeOnceVisible, freezeOnceVisible = _c === void 0 ? false : _c;
    var _funCallback = function (entries, observer) {
        entries.map(function (entry) {
            if (entry.isIntersecting) {
                //
                callback();
                //  ---- IF TRUE WE WILL UNOBSERVER AND FALSE IS NO
                if (freezeOnceVisible) {
                    observer.unobserve(entry.target);
                }
            }
            return true;
        });
    };
    // _checkBrowserSupport-----
    if (typeof window.IntersectionObserver === "undefined") {
        console.error("window.IntersectionObserver === undefined! => Your Browser is Notsupport");
        return;
    }
    var observer = new IntersectionObserver(_funCallback, options);
    target && observer.observe(target);
};
export default checkInViewIntersectionObserver;
//# sourceMappingURL=isInViewPortIntersectionObserver.js.map