/** Used to generate unique IDs. */
var idCounter = {};
/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @since 0.1.0
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @see random
 * @example
 *
 * ncNanoId('contact_')
 * // => 'contact_104'
 *
 * ncNanoId()
 * // => '105'
 */
function ncNanoId(prefix) {
    if (prefix === void 0) { prefix = "ncNanoId_"; }
    if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
    }
    var id = ++idCounter[prefix];
    if (prefix === "$lodash$") {
        return "".concat(id);
    }
    return "".concat(prefix).concat(id);
}
export default ncNanoId;
//# sourceMappingURL=ncNanoId.js.map