"use client";
import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import NcInputNumber from "../../shared/NcInputNumber";
import ClearDataButton from "./ClearDataButton";
import ButtonSubmit from "./ButtonSubmit";
import { UserPlusIcon } from "@heroicons/react/24/outline";
var GuestsInput = function (_a) {
    var _b = _a.fieldClassName, fieldClassName = _b === void 0 ? "[ nc-hero-field-padding ]" : _b, _c = _a.className, className = _c === void 0 ? "[ nc-flex-1 ]" : _c, _d = _a.buttonSubmitHref, buttonSubmitHref = _d === void 0 ? "/listing-stay-map" : _d, _e = _a.hasButtonSubmit, hasButtonSubmit = _e === void 0 ? true : _e;
    var _f = useState(2), guestAdultsInputValue = _f[0], setGuestAdultsInputValue = _f[1];
    var _g = useState(1), guestChildrenInputValue = _g[0], setGuestChildrenInputValue = _g[1];
    var _h = useState(1), guestInfantsInputValue = _h[0], setGuestInfantsInputValue = _h[1];
    var handleChangeData = function (value, type) {
        // eslint-disable-next-line prefer-const
        var newValue = {
            guestAdults: guestAdultsInputValue,
            guestChildren: guestChildrenInputValue,
            guestInfants: guestInfantsInputValue,
        };
        if (type === "guestAdults") {
            setGuestAdultsInputValue(value);
            newValue.guestAdults = value;
        }
        if (type === "guestChildren") {
            setGuestChildrenInputValue(value);
            newValue.guestChildren = value;
        }
        if (type === "guestInfants") {
            setGuestInfantsInputValue(value);
            newValue.guestInfants = value;
        }
    };
    var totalGuests = guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue;
    return (<Popover className={"flex relative ".concat(className)}>
      {function (_a) {
            var open = _a.open;
            return (<>
          <div className={"flex-1 z-10 flex items-center focus:outline-none ".concat(open ? "nc-hero-field-focused" : "")}>
            <Popover.Button className={"relative z-10 flex-1 flex text-left items-center ".concat(fieldClassName, " space-x-3 focus:outline-none")}>
              <div className="text-neutral-300 dark:text-neutral-400">
                <UserPlusIcon className="w-5 h-5 lg:w-7 lg:h-7"/>
              </div>
              <div className="flex-grow">
                <span className="block xl:text-lg font-semibold">
                  {totalGuests || ""} Guests
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  {totalGuests ? "Guests" : "Add guests"}
                </span>
              </div>

              {!!totalGuests && open && (<ClearDataButton onClick={function () {
                        setGuestAdultsInputValue(0);
                        setGuestChildrenInputValue(0);
                        setGuestInfantsInputValue(0);
                    }}/>)}
            </Popover.Button>

            {/* BUTTON SUBMIT OF FORM */}
            {hasButtonSubmit && (<div className="pr-2 xl:pr-4">
                <ButtonSubmit href={buttonSubmitHref}/>
              </div>)}
          </div>

          {open && (<div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -left-0.5 right-0.5 bg-white dark:bg-neutral-800"></div>)}
          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <NcInputNumber className="w-full" defaultValue={guestAdultsInputValue} onChange={function (value) { return handleChangeData(value, "guestAdults"); }} max={10} min={1} label="Adults" desc="Ages 13 or above"/>
              <NcInputNumber className="w-full mt-6" defaultValue={guestChildrenInputValue} onChange={function (value) { return handleChangeData(value, "guestChildren"); }} max={4} label="Children" desc="Ages 2–12"/>

              <NcInputNumber className="w-full mt-6" defaultValue={guestInfantsInputValue} onChange={function (value) { return handleChangeData(value, "guestInfants"); }} max={4} label="Infants" desc="Ages 0–2"/>
            </Popover.Panel>
          </Transition>
        </>);
        }}
    </Popover>);
};
export default GuestsInput;
//# sourceMappingURL=GuestsInput.jsx.map