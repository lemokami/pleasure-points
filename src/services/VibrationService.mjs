/**
 * beep beep beep
 *
 * beep beeeeeep beep beeeeep
 *
 * beep beep beeeeeep
 *
 */

import { StateService } from "./StateService.mjs";

export class VibrationService {
    /**
     * @param {StateService} state State service
     */
    constructor(state) {
        this._state = state;
        this.canVibrate = !!window.navigator.vibrate;
        this.isVibrating = false;
        this.vibrationTimer = null;
    }

    /**
     * Execute a vibration
     *
     * @param {Vibration} vibration
     *
     * @returns `true` when vibration is success
     */
    vibrate(vibration, loop) {
        if (!this.canVibrate) {
            throw new Error("vibration not supported by your device");
        }

        try {
            const result = window.navigator.vibrate(vibration.sequence);

            this.isVibrating = true;

            if (loop) {
                this.vibrationTimer = setInterval(() => {
                    window.navigator.vibrate(vibration.sequence);
                }, vibration.duration);
            }

            this._state.set("currentMode", vibration);

            return result;
        } catch (err) {
            throw new Error("cannot vibrate");
        }
    }

    stop() {
        try {
            this._state.set("currentMode", null);

            window.navigator.vibrate(0);

            this.isVibrating = false;

            if (!this.vibrationTimer) {
                return;
            }

            clearInterval(this.vibrationTimer);
        } catch {
            console.error("Stopping vibration failed");
        }
    }
}

export class Vibration {
    /**
     * @param {string} label Text to show for identifying the vibration
     * @param {number[] | number} sequence Vibration pattern
     */
    constructor(label, sequence) {
        const isValidInput =
            Array.isArray(sequence) || typeof sequence === "number";

        if (!isValidInput) {
            throw new Error("invalid sequence given");
        }

        this.sequence = sequence;
        this.duration = Array.isArray(sequence)
            ? sequence.reduce((duration, el) => duration + el, 0)
            : sequence;

        this.label = label;
    }
}

const BEEP = 300;
const LONG_BEEP = BEEP * 2;
const REST = 100;

export const modes = {
    pulse: new Vibration("Pulse", [BEEP, REST, BEEP, REST, BEEP, REST]),
    pulseLong: new Vibration("Long Pulse", [
        BEEP,
        REST,
        LONG_BEEP,
        REST,
        BEEP,
        REST,
        LONG_BEEP,
        REST,
    ]),
};
