"use client";
import React, { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
var NcInputNumber = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "w-full" : _b, _c = _a.defaultValue, defaultValue = _c === void 0 ? 0 : _c, _d = _a.min, min = _d === void 0 ? 0 : _d, max = _a.max, onChange = _a.onChange, label = _a.label, desc = _a.desc;
    var _e = useState(defaultValue), value = _e[0], setValue = _e[1];
    useEffect(function () {
        setValue(defaultValue);
    }, [defaultValue]);
    var handleClickDecrement = function () {
        if (min >= value)
            return;
        setValue(function (state) {
            return state - 1;
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(value - 1);
    };
    var handleClickIncrement = function () {
        if (max && max <= value)
            return;
        setValue(function (state) {
            return state + 1;
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(value + 1);
    };
    var renderLabel = function () {
        return (<div className="flex flex-col">
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          {label}
        </span>
        {desc && (<span className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
            {desc}
          </span>)}
      </div>);
    };
    return (<div className={"nc-NcInputNumber flex items-center justify-between space-x-5 ".concat(className)} data-nc-id="NcInputNumber">
      {label && renderLabel()}

      <div className={"nc-NcInputNumber flex items-center justify-between w-28"}>
        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default" type="button" onClick={handleClickDecrement} disabled={min >= value}>
          <MinusIcon className="w-4 h-4"/>
        </button>
        <span>{value}</span>
        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default" type="button" onClick={handleClickIncrement} disabled={max ? max <= value : false}>
          <PlusIcon className="w-4 h-4"/>
        </button>
      </div>
    </div>);
};
export default NcInputNumber;
//# sourceMappingURL=NcInputNumber.jsx.map