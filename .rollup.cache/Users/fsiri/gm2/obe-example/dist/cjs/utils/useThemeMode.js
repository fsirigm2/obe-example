import { useEffect } from "react";
import { createGlobalState } from "react-hooks-global-state";
var initialState = { isDarkmode: false };
var useGlobalState = createGlobalState(initialState).useGlobalState;
export var useThemeMode = function () {
    var _a = useGlobalState("isDarkmode"), isDarkMode = _a[0], setIsDarkMode = _a[1];
    useEffect(function () {
        // Enbale this if you want use the dark-mode for default mode.
        // if (!localStorage.theme) {
        //   localStorage.theme = "dark";
        // }
        //
        if (localStorage.theme === "dark") {
            toDark();
        }
        else {
            toLight();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var toDark = function () {
        setIsDarkMode(true);
        var root = document.querySelector("html");
        if (!root)
            return;
        !root.classList.contains("dark") && root.classList.add("dark");
        localStorage.theme = "dark";
    };
    var toLight = function () {
        setIsDarkMode(false);
        var root = document.querySelector("html");
        if (!root)
            return;
        root.classList.remove("dark");
        localStorage.theme = "light";
    };
    function _toogleDarkMode() {
        if (localStorage.theme === "light") {
            toDark();
        }
        else {
            toLight();
        }
    }
    return {
        isDarkMode: isDarkMode,
        toDark: toDark,
        toLight: toLight,
        _toogleDarkMode: _toogleDarkMode,
    };
};
//# sourceMappingURL=useThemeMode.js.map