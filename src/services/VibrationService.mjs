/**
 * beep beep beep
 *
 * beep beeeeeep beep beeeeep
 *
 * beep beep beeeeeep
 *
 */

export class VibrationService {
    constructor() {
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
            if (loop) {
                this.vibrationTimer = setInterval(() => {
                    const result = window.navigator.vibrate(vibration.sequence);

                    this.isVibrating = true;
                }, vibration.duration);

                return;
            }

            const result = window.navigator.vibrate(vibration.sequence);

            return result;
        } catch (err) {
            throw new Error("cannot vibrate");
        }
    }

    stop() {
        try {
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
     * @param {number[] | number} sequence Vibration pattern
     */
    constructor(sequence) {
        const isValidInput =
            Array.isArray(sequence) || typeof sequence === "number";

        if (!isValidInput) {
            throw new Error("invalid sequence given");
        }

        this.sequence = sequence;
        this.duration = Array.isArray(sequence)
            ? sequence.reduce((duration, el) => duration + el, 0)
            : sequence;
    }
}

const BEEP = 300;
const LONG_BEEP = BEEP * 2;
const REST = 100;

export const vibrations = {
    pulse: new Vibration([BEEP, REST, BEEP, REST, BEEP, REST]),
    pulseLong: new Vibration([
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
