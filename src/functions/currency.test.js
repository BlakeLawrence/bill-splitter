import { describe, test, expect } from "@jest/globals";
import currency from "./currency";

// currency converter function tests
describe("Currency convertor should format any number into british pounds as a string", () => {
  test("value of 1000 to format to £1,000.00", () => {
    expect(currency(1000)).toBe("£1,000.00");
  });
  test("value of 12599 to format to £1,255.99", () => {
    expect(currency(1255.99)).toBe("£1,255.99");
  });
});
