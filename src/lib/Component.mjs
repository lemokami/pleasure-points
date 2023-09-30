class Component {
    /**
     * Base component class for inheriting and using to building
     * components
     *
     * @param {HTMLElement} node Html node to which the component is rendered
     */
    constructor(node) {
        if (!(node instanceof HTMLElement)) {
            throw new Error("node not html element");
        }
        this.node = node;
    }

    render() {}
}
