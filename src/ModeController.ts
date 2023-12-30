import Mode from './components/Mode';

export default class ModeController {
    public static instance: ModeController|undefined;
    public mode: Mode;

    private static subscribers: ((mode: Mode) => void)[] = [];

    private static defaultMode: Mode = Mode.STEP;

    static setInstance(mode?: Mode): void {
        if (mode === undefined) {
            ModeController.instance = new ModeController(ModeController.defaultMode);
            return;
        }
        ModeController.instance = new ModeController(mode);
    }

    static getMode(): Mode {
        if (ModeController.instance === undefined) {
            ModeController.setInstance();
        }
        return ModeController.instance!.mode;
    }

    static subscribe(callback: (mode: Mode) => void): void {
        ModeController.subscribers.push(callback);
    }


    static setMode(mode: Mode): void {
        if (ModeController.instance === undefined) {
            ModeController.setInstance();
        }
        ModeController.instance!.mode = mode;

        ModeController.subscribers.forEach(callback => {
            callback(mode);
        });
    }

    static getInstance(): ModeController {
        if (ModeController.instance === undefined) {
            ModeController.setInstance();
        }
        return ModeController.instance!;
    }

    constructor(mode: Mode) {
        this.mode = mode;
    }
}
