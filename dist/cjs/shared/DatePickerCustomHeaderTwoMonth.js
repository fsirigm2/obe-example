"use strict";var e=require("@heroicons/react/24/outline");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(require("react"));module.exports=function(t){var n=t.monthDate,r=t.customHeaderCount,i=t.decreaseMonth,c=t.increaseMonth;return a.default.createElement("div",null,a.default.createElement("button",{"aria-label":"Previous Month",className:"react-datepicker__navigation react-datepicker__navigation--previous absolute -top-1 left-0 flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",style:1===r?{visibility:"hidden"}:{},onClick:i,type:"button"},a.default.createElement("span",{className:"react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"},a.default.createElement(e.ChevronLeftIcon,{className:"w-5 h-5"}))),a.default.createElement("span",{className:"react-datepicker__current-month"},n.toLocaleString("en-US",{month:"long",year:"numeric"})),a.default.createElement("button",{"aria-label":"Next Month",className:"react-datepicker__navigation react-datepicker__navigation--next absolute -top-1 -right-0 flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",style:0===r?{visibility:"hidden"}:{},type:"button",onClick:c},a.default.createElement("span",{className:"react-datepicker__navigation-icon react-datepicker__navigation-icon--next"},a.default.createElement(e.ChevronRightIcon,{className:"w-5 h-5"}))))};
//# sourceMappingURL=DatePickerCustomHeaderTwoMonth.js.map
