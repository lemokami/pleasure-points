import { Component } from "../lib/Component.mjs";
import { services } from "../services/index.mjs";

export class Timer extends Component {
    constructor(selector) {
        super(selector);

        this.node = document.querySelector(selector);

        if (!this.node) {
            return;
        }

        this.DEFAULT_TIME = "00:00";

        this.setup();
    }

    setup() {
        this.render(this.DEFAULT_TIME);

        const startTime = services.state.get("startTime");

        startTime?.watch((value) => {
            this.startTimer(value);
        });
    }

    getTimeString(secondsElapsed) {
        const minutes = `${Math.floor(secondsElapsed / 60)}`.padStart(2, "0");
        const seconds = `${Math.floor(secondsElapsed % 60)}`.padStart(2, "0");

        return `${minutes}:${seconds}`;
    }

    startTimer(startTime) {
        if (!startTime) {
            this.stopTimer();

            return;
        }

        this.interval = setInterval(() => {
            const secondsElapsed = (Date.now() - startTime.getTime()) / 1000;

            this.render(this.getTimeString(secondsElapsed));
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.interval);

        this.render(this.DEFAULT_TIME);
    }

    render(time) {
        requestAnimationFrame(() => {
            this.node.textContent = time;
        });
    }
}
