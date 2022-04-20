import { group } from "k6";
import runTestOne from "./scenarios/test1.js";
import runTestTwo from "./scenarios/test2.js";

export default function() {
    group("Test 1", () => {
        runTestOne();
    })

    group("Test 2", () => {
        runTestTwo();
    })
};
