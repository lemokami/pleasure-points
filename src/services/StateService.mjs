import { Ref } from "../lib/Ref.mjs";

/**
 * Global state service
 */
export class StateService {
    constructor() {
        this._state = {};
    }

    /**
     * Set a state value as a Ref
     *
     * @param {string} key Key for storing the state value
     * @param {any} value Value of the state
     *
     * @returns Updated Ref
     */
    set(key, value) {
        if (key in this._state) {
            this._state[key].value = value;

            return;
        }

        this._state[key] = new Ref(value);

        return this._state[key];
    }

    /**
     * Get Ref to the state
     *
     * @param {string} key Key for accessing state
     * @returns {Ref | undefined} The ref to the state
     */
    get(key) {
        return this._state[key];
    }
}
