"use client";
import Link from "next/link";
import React from "react";
var Button = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "text-neutral-700 dark:text-neutral-200" : _b, _c = _a.translate, translate = _c === void 0 ? "" : _c, _d = _a.sizeClass, sizeClass = _d === void 0 ? "px-4 py-3 sm:px-6" : _d, _e = _a.fontSize, fontSize = _e === void 0 ? "text-sm sm:text-base font-medium" : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, href = _a.href, children = _a.children, targetBlank = _a.targetBlank, type = _a.type, loading = _a.loading, _g = _a.onClick, onClick = _g === void 0 ? function () { } : _g;
    var CLASSES = "nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors ".concat(fontSize, " ").concat(sizeClass, " ").concat(translate, " ").concat(className, " ");
    var _renderLoading = function () {
        return (<svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>);
    };
    if (!!href) {
        return (<Link href={href} target={targetBlank ? "_blank" : undefined} className={"".concat(CLASSES, " ")} onClick={onClick} rel={targetBlank ? "noopener noreferrer" : undefined}>
        {children || "This is Link"}
      </Link>);
    }
    return (<button disabled={disabled || loading} className={"".concat(CLASSES)} onClick={onClick} type={type}>
      {loading && _renderLoading()}
      {children || "This is Button"}
    </button>);
};
export default Button;
//# sourceMappingURL=Button.jsx.map