import React from "react";
import GuestsInput from "./GuestsInput";
import StayDatesRangeInput from "./StayDatesRangeInput";
var StaySearchForm = function (_a) {
    var renderForm = function () {
        return (<form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <StayDatesRangeInput className="flex-1"/>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <GuestsInput className="flex-1"/>
      </form>);
    };
    return renderForm();
};
export default StaySearchForm;
//# sourceMappingURL=StaySearchForm.jsx.map