import { Component } from "../lib/Component.mjs";
import { services } from "../services/index.mjs";

export class CurrentMode extends Component {
    constructor(selector) {
        super(selector);

        this.DEFAULT_MODE = "OFF";

        this.setup();
    }

    setup() {
        this.node = document.querySelector(this.selector);

        let currentMode = services.state.get("currentMode");

        if (!currentMode) {
            currentMode = services.state.set("currentMode", this.DEFAULT_MODE);
        }

        this.render(currentMode?.value.label);

        currentMode?.watch((mode) => {
            this.render(mode?.label);
        });
    }

    render(modeName) {
        requestAnimationFrame(() => {
            if (!this.node) {
                return;
            }

            this.node.textContent = modeName || this.DEFAULT_MODE;
        });
    }
}
