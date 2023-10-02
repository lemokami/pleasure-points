/**
 * Reactive ref primitive implementing observable
 */
export class Ref {
    /**
     * Instantiate a new ref
     *
     * @param {any} value Value of the ref
     */
    constructor(value) {
        this._value = value;
        this._watchers = new Set();
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;

        this._executeWatchers();
    }

    _executeWatchers() {
        for (const watcher of this._watchers) {
            requestAnimationFrame(() => {
                watcher(this._value);
            });
        }
    }

    /**
     * Add a watcher to get triggered when value of the
     * ref changes
     *
     * @param {(value: any) => any} watcher
     *
     * @returns Function to remove the watcher from the ref
     */
    watch(watcher) {
        if (typeof watcher !== "function") {
            throw new InvalidWatcherError();
        }

        this._watchers.add(watcher);

        return () => {
            this._watchers.delete(watcher);
        };
    }
}

export class InvalidWatcherError extends Error {
    constructor(msg) {
        super(msg);
    }
}
