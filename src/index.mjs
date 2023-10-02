import "@fontsource/press-start-2p";
import "@fontsource/bungee";
import { ToggleVibrateBtn } from "./components/ToggleVibrateBtn.mjs";
import { Timer } from "./components/Timer.mjs";
import { services } from "./services/index.mjs";
import { CurrentMode } from "./components/CurrentMode.mjs";

services.state.set("startTime", null);

new ToggleVibrateBtn("#toggle-vibration");
new Timer("#timer");
new CurrentMode("#current-mode");
