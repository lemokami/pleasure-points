import { Component, InvalidNodeError } from "../lib/Component.mjs";
import { services, vibrations } from "../services/index.mjs";

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

        services.vibration.vibrate(vibrations.pulseLong, true);
    }
}
