"use client";
import React, { useState } from "react";
import StaySearchForm from "./StaySearchForm";
var HeroSearchForm = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.currentTab, currentTab = _c === void 0 ? "Stays" : _c;
    var tabs = ["Stays"];
    var _d = useState(currentTab), tabActive = _d[0], setTabActive = _d[1];
    var renderTab = function () {
        return (<ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
        {tabs.map(function (tab) {
                var active = tab === tabActive;
                return (<li onClick={function () { return setTabActive(tab); }} className={"flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ".concat(active
                        ? ""
                        : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400", " ")} key={tab}>
              {active && (<span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2"/>)}
              <span>{tab}</span>
            </li>);
            })}
      </ul>);
    };
    var renderForm = function () {
        switch (tabActive) {
            case "Stays":
                return <StaySearchForm />;
            default:
                return null;
        }
    };
    return (<div className={"nc-HeroSearchForm w-full max-w-6xl  ".concat(className)}>
      {renderTab()}
      {renderForm()}
    </div>);
};
export default HeroSearchForm;
//# sourceMappingURL=HeroSearchForm.jsx.map