export interface CharacterData {
    name: string
    hp: number
    def: number
    str: number
}

export const validateCharacter = (input: CharacterData): boolean => {

    if (!input.name || input.hp === undefined || input.def === undefined || input.str === undefined) {
        return false
    }

    if (input.hp <= 0 || input.def <= 0 || input.str <= 0) {
        return false
    }

    return true
}