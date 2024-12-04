import { __rest } from "tslib";
import React from "react";
// eslint-disable-next-line react/display-name
var Input = React.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.sizeClass, sizeClass = _c === void 0 ? "h-11 px-4 py-3" : _c, _d = _a.fontClass, fontClass = _d === void 0 ? "text-sm font-normal" : _d, _e = _a.rounded, rounded = _e === void 0 ? "rounded-2xl" : _e, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children = _a.children, _f = _a.type, type = _f === void 0 ? "text" : _f, args = __rest(_a, ["className", "sizeClass", "fontClass", "rounded", "children", "type"]);
    return (<input ref={ref} type={type} className={"block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ".concat(rounded, " ").concat(fontClass, " ").concat(sizeClass, " ").concat(className)} {...args}/>);
});
export default Input;
//# sourceMappingURL=Input.jsx.map