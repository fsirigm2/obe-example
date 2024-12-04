"use client";
import "client-only";
import { useEffect } from "react";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, handleClickOutsideCallback) {
    useEffect(function () {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClickOutsideCallback();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]); // eslint-disable-line react-hooks/exhaustive-deps
}
export default useOutsideAlerter;
//# sourceMappingURL=useOutsideAlerter.js.map