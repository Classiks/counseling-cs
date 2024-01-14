export default class Interval {
    private interval: NodeJS.Timeout | null = null;
    private callback: () => void;
    private delay: number;

    constructor(callback: () => void, delay: number) {
        this.callback = callback;
        this.delay = delay;
    }

    start() { 
        if (this.interval !== null) {
            return;
        }

        this.interval = setInterval(this.callback, this.delay);
    }

    stop() {
        if (this.interval === null) {
            return;
        }

        clearInterval(this.interval);
        this.interval = null;
    }

    reset() {
        if (this.interval === null || this.callback === null || this.delay === null) {
            return;
        }

        console.log("reset")

        this.stop();
        this.start();
    }
}