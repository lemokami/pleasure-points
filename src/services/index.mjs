import { StateService } from "./StateService.mjs";
import { VibrationService } from "./VibrationService.mjs";

export const services = {
    vibration: new VibrationService(),
    state: new StateService(),
};

export { modes as vibrations } from "./VibrationService.mjs";
