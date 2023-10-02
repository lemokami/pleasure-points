export class Component {
    /**
     * Base component class for inheriting and using to building
     * components
     *
     * @param {string} selector Selector for getting the html node
     */
    constructor(selector) {
        if (typeof selector !== "string") {
            throw new InvalidSelectorError(selector);
        }

        this.selector = selector;
    }

    setup() {
        console.log("component setup complete");
    }

    /**
     * Render the component
     */
    render() {}
}

export class InvalidSelectorError extends Error {
    constructor(selector) {
        super(`Selector: ${selector} is invalid. Must be a string`);
    }
}

export class InvalidNodeError extends Error {
    constructor(selector) {
        super(`Node matching selector ${selector} not found`);
    }
}
