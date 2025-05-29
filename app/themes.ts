// themes.ts
import * as stylex from "@stylexjs/stylex";
import { colors } from "./globalTokens.stylex";

export const light = stylex.createTheme(colors, {
    foregroundR: "8",
    foregroundG: "8",
    foregroundB: "9",

    secondaryTextR: "101",
    secondaryTextG: "104",
    secondaryTextB: "108",

    bgStartR: "214",
    bgStartG: "219",
    bgStartB: "220",

    bgEndR: "255",
    bgEndG: "255",
    bgEndB: "255",

    bgSecondaryR: "255",
    bgSecondaryG: "255",
    bgSecondaryB: "255",

    bgAltR: "226",
    bgAltG: "229",
    bgAltB: "233",

    bgAltHoverR: "213",
    bgAltHoverG: "216",
    bgAltHoverB: "220",

    borderR: "187",
    borderG: "189",
    borderB: "193",

    shadowR: "0",
    shadowG: "0",
    shadowB: "0",

    blackWhiteR: "8",
    blackWhiteG: "8",
    blackWhiteB: "9",

    primaryR: "8",
    primaryG: "102",
    primaryB: "255",

    successR: "49",
    successG: "162",
    successB: "76",

    warningR: "242",
    warningG: "169",
    warningB: "24",

    dangerR: "239",
    dangerG: "68",
    dangerB: "68",
});

export const dark = stylex.createTheme(colors, {
    foregroundR: "226",
    foregroundG: "229",
    foregroundB: "233",

    secondaryTextR: "176",
    secondaryTextG: "179",
    secondaryTextB: "184",

    bgStartR: "28",
    bgStartG: "28",
    bgStartB: "29",

    bgEndR: "0",
    bgEndG: "0",
    bgEndB: "0",

    bgSecondaryR: "37",
    bgSecondaryG: "39",
    bgSecondaryB: "40",

    bgAltR: "59",
    bgAltG: "61",
    bgAltB: "62",

    bgAltHoverR: "78",
    bgAltHoverG: "80",
    bgAltHoverB: "80",

    borderR: "101",
    borderG: "104",
    borderB: "108",

    shadowR: "0",
    shadowG: "0",
    shadowB: "0",

    blackWhiteR: "226",
    blackWhiteG: "229",
    blackWhiteB: "233",

    primaryR: "8",
    primaryG: "102",
    primaryB: "255",

    successR: "49",
    successG: "162",
    successB: "76",

    warningR: "242",
    warningG: "169",
    warningB: "24",

    dangerR: "239",
    dangerG: "68",
    dangerB: "68",
});
