import {validateCharacter} from "../src/validateCharacter";
import {performAttack} from "../src/performAttack";

describe("Verify if given character has the correct stats", () => {

    test("Return false if 'name' is an empty string. ", () => {
        const result = validateCharacter({
            name: "",
            hp: 1000,
            def: 250,
            str: 350
        })

        expect(result).toBe(false)
    })

    test("Return false if character's hp is set to 0.", () => {
        const result = validateCharacter({
            name: "Pedro",
            hp: 0,
            def: 250,
            str: 350
        })

        expect(result).toBe(false)
    })

    test("Return false if character's str is set to 0.", () => {
        const result = validateCharacter({
            name: "Pedro",
            hp: 1000,
            def: 75,
            str: 0
        })

        expect(result).toBe(false)
    })

    test("Return false if character's def is set to 0.", () => {
        const result = validateCharacter({
            name: "Pedro",
            hp: 1000,
            def: 0,
            str: 150
        })

        expect(result).toBe(false)
    })

    test("Return false if any of the character stats is negative.", () => {
        const result = validateCharacter({
            name: "Pedro",
            hp: 1000,
            def: -10,
            str: 150
        })

        expect(result).toBe(false)
    })

    test("Return true if the character stats are okay.", () => {
        const result = validateCharacter({
            name: "Pedro",
            hp: 1000,
            def: 75,
            str: 150
        })

        expect(result).toBe(true)
    })
})

