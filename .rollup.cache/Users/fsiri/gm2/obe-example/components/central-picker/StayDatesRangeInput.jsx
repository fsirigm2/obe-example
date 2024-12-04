"use client";
import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePickerCustomHeaderTwoMonth from "../../shared/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "../../shared/DatePickerCustomDay";
import DatePicker from "react-datepicker";
import ClearDataButton from "./ClearDataButton";
var StayDatesRangeInput = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "[ lg:nc-flex-2 ]" : _b, _c = _a.fieldClassName, fieldClassName = _c === void 0 ? "[ nc-hero-field-padding ]" : _c;
    var _d = useState(new Date("2023/02/06")), startDate = _d[0], setStartDate = _d[1];
    var _e = useState(new Date("2023/02/23")), endDate = _e[0], setEndDate = _e[1];
    //
    var onChangeDate = function (dates) {
        var start = dates[0], end = dates[1];
        setStartDate(start);
        setEndDate(end);
    };
    var renderInput = function () {
        return (<>
        <div className="text-neutral-300 dark:text-neutral-400">
          <CalendarIcon className="w-5 h-5 lg:w-7 lg:h-7"/>
        </div>
        <div className="flex-grow text-left">
          <span className="block xl:text-lg font-semibold">
            {(startDate === null || startDate === void 0 ? void 0 : startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
            })) || "Add dates"}
            {endDate
                ? " - " +
                    (endDate === null || endDate === void 0 ? void 0 : endDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                    }))
                : ""}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {"Check in - Check out"}
          </span>
        </div>
      </>);
    };
    return (<Popover className={"StayDatesRangeInput z-10 relative flex ".concat(className)}>
      {function (_a) {
            var open = _a.open;
            return (<>
          <Popover.Button className={"flex-1 z-10 flex relative ".concat(fieldClassName, " items-center space-x-3 focus:outline-none ").concat(open ? "nc-hero-field-focused" : "")}>
            {renderInput()}
            {startDate && open && (<ClearDataButton onClick={function () { return onChangeDate([null, null]); }}/>)}
          </Popover.Button>

          {open && (<div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white dark:bg-neutral-800"></div>)}

          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-8">
                <DatePicker selected={startDate} onChange={onChangeDate} startDate={startDate} endDate={endDate} selectsRange monthsShown={2} showPopperArrow={false} inline renderCustomHeader={function (p) { return (<DatePickerCustomHeaderTwoMonth {...p}/>); }} renderDayContents={function (day, date) { return (<DatePickerCustomDay dayOfMonth={day} date={date}/>); }}/>
              </div>
            </Popover.Panel>
          </Transition>
        </>);
        }}
    </Popover>);
};
export default StayDatesRangeInput;
//# sourceMappingURL=StayDatesRangeInput.jsx.map