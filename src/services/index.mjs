import { VibrationService } from "./VibrationService.mjs";

export const services = {
    vibration: new VibrationService(),
};

export { modes as vibrations } from "./VibrationService.mjs";
