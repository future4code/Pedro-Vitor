import {CharacterData, validateCharacter} from "./validateCharacter";

// export const performAttack = (
//     attacker: CharacterData,
//     defender: CharacterData
// ) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("Make sure your characters have the correct status.")
//     }
//
//     if (attacker.str > defender.def) {
//         defender.hp -= attacker.str - defender.def
//     }
// }

export const performAttack = (
    attacker: CharacterData,
    defender: CharacterData,
    validator: (input: CharacterData) => boolean
) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error ("Make sure your characters have the correct status.")
    }

    if (attacker.str > defender.def) {
        defender.hp -= attacker.str - defender.def
    }
}

