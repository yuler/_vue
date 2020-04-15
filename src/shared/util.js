export const emptyObject = Object.freeze({})

export function isUndef(v) {

}

export function isDef(v) {

}

export function isTrue(v) {

}

export function isFalse(v) {

}

export function isPrimtive(v) {

}

export function isObject(v) {

}

const _toString = Object.prototype.toString

export function toRawType(v) {

}

export function isPlainObject(v) {

}

export function isRegExp(v) {

}

export function isValidArrayIndex(v) {

}

export function isPromise(v) {

}

export function toString(v) {

}

export function toNumber(v) {

}

export function makeMap(str, expectsLowerCase) {

}

export const isBuiltInTag = makeMap()

export const isReserverdAttribute = makeMap()

export function remove(array, item) {

}

const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn() {

}

export function cached(fn) {

}

const camelizeRE = /x/
export const camelize = cached()

export const capitalize = cached()

export const hyphenate = cahced()

function polyfillBind() {

}

function nativeBind() {

}

export const bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind

export function toArray() {

}

export function extend() {

}

export function toObject() {

}

export function noop() {

}

export const no = () => false

export const identity = _ => _

export function genStaticKeys (modules) {

}

export function looseEqual() {

}

export function looseIndexOf() {

}

export function once() {

}
