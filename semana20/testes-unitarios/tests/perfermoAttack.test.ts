import {CharacterData} from "../src/validateCharacter"
import {performAttack} from "../src/performAttack";

describe('validate fight', () => {
    test('Should perform attack', () => {
        const validatorMock = jest.fn(() => {
            return true;
        })

        const attacker: CharacterData = {
            name: 'Scorpion',
            hp: 1300,
            str: 800,
            def: 400
        }

        const defender: CharacterData = {
            name: 'Subzero',
            hp: 1500,
            str: 500,
            def: 500
        }

        performAttack(attacker, defender, validatorMock as any)
        expect(defender.hp).toEqual(1200)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
})

test('Should return invalid character error', () => {
    expect.assertions(4)
    const validatorMock = jest.fn(() => {
        return false
    })

    const attacker: CharacterData = {
        name: '',
        hp: 1300,
        str: 800,
        def: 400
    }

    const defender: CharacterData = {
        name: 'Subzero',
        hp: 1500,
        str: 500,
        def: 500
    }

    try {
        performAttack(attacker, defender, validatorMock as any)
    } catch (err) {
        expect(err.message).toBe('Invalid character')
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(1)
        expect(validatorMock).toHaveReturnedTimes(1)
    }
})