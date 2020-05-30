"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(require("color"));
// based on http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
var hue = Math.random();
const goldenRatio = 0.618033988749895;
function default_1(saturation, value) {
    hue += goldenRatio;
    hue %= 1;
    if (typeof saturation !== 'number')
        saturation = 0.5;
    if (typeof value !== 'number')
        value = 0.95;
    return color_1.default({
        h: hue * 360,
        s: saturation * 100,
        v: value * 100,
    });
}
exports.default = default_1;
