import { useId } from "react";
export default function useNcId(pre) {
    if (pre === void 0) { pre = "nc"; }
    var id = useId();
    return "".concat(pre, "_").concat(id.replace(/:/g, "_"));
}
//# sourceMappingURL=useNcId.js.map