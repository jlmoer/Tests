// isEven:

const { expect } = require("@jest/globals");
const { boolean } = require("yargs");
const isEven = require("./isEven");

test("If numbers are even", () => {
    const result = isEven("4");
    expect(result).toBe(true);
});

