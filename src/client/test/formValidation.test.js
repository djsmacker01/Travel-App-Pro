import { getFormDetails } from "../js/validation";

describe("Test: the function 'getFormDetails())'", () => {
    test('It should be defined', () => {
        expect(getFormDetails).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof getFormDetails).toBe("function");
    });
})