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
declare function ncNanoId(prefix?: string): string;
export default ncNanoId;
