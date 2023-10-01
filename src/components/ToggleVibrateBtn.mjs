import { Component, InvalidNodeError } from "../lib/Component.mjs";
import { Vibration } from "../services/VibrationService.mjs";
import { services } from "../services/index.mjs";

const BEEP = 300;
const LONG_BEEP = BEEP * 2;
const REST = 100;

const vibrations = {
    pulse: new Vibration([BEEP, REST, BEEP, REST, BEEP, REST]),
};

export class ToggleVibrateBtn extends Component {
    constructor(selector) {
        super(selector);

        this.node = document.querySelector(selector);

        if (!this.node) {
            throw new InvalidNodeError(selector);
        }

        this.listeners = [];

        this.setup();
    }

    setup() {
        super.setup();

        this.node.addEventListener("click", this.handleClick.bind(this));
    }

    render() {}

    handleClick() {
        if (services.vibration.isVibrating) {
            services.vibration.stop();

            return;
        }

        services.vibration.vibrate(vibrations.pulse, true);
    }
}
