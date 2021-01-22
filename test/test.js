const { expect } = require("chai");
const { 
    calculatePorkBuns,
    calculateChange,
} = require("../index")


const cost = 2;

describe("Pork bun Functions", () => {
    it("calculatePorkBuns should return value of 2", () => {
        expect(calculatePorkBuns(5, cost)).to.equal(2)
    })
    it("calculateChange should return a value of 1", () => {
        expect(calculateChange(5, cost)).to.equal(1)
    })
})