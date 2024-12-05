export default function twFocusClass(hasRing) {
    if (hasRing === void 0) { hasRing = false; }
    if (!hasRing) {
        return "focus:outline-none";
    }
    return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0";
}
//# sourceMappingURL=twFocusClass.js.map