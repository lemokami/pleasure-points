import { StateService } from "./StateService.mjs";
import { VibrationService } from "./VibrationService.mjs";

const stateService = new StateService();

export const services = {
    vibration: new VibrationService(stateService),
    state: stateService,
};

export { modes as vibrations } from "./VibrationService.mjs";
