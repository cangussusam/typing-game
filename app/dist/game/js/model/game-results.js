var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GameResults_points, _GameResults_errors, _GameResults_time;
export class GameResults {
    constructor(points, errors, time) {
        _GameResults_points.set(this, void 0);
        _GameResults_errors.set(this, void 0);
        _GameResults_time.set(this, void 0);
        __classPrivateFieldSet(this, _GameResults_points, points, "f");
        __classPrivateFieldSet(this, _GameResults_errors, errors, "f");
        __classPrivateFieldSet(this, _GameResults_time, time, "f");
    }
    get accuracy() {
        const totalWords = __classPrivateFieldGet(this, _GameResults_points, "f") + __classPrivateFieldGet(this, _GameResults_errors, "f");
        const accuracy = (__classPrivateFieldGet(this, _GameResults_points, "f") / totalWords) * 100;
        if (!accuracy) {
            return 0;
        }
        return Math.round(accuracy);
    }
    get wpm() {
        return __classPrivateFieldGet(this, _GameResults_points, "f") / (__classPrivateFieldGet(this, _GameResults_time, "f") / 60);
    }
}
_GameResults_points = new WeakMap(), _GameResults_errors = new WeakMap(), _GameResults_time = new WeakMap();
