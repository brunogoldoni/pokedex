export interface IPokemon {
  url: string,
  name: string,
  pokemonImage: string,
}

export interface IPokemonInfos {
  name: string,
  weight: number,
  types: ITypes[],
  abilities: IAbilities[],
  game_indices: ISkills[],
}

interface ITypes {
  type: IType,
}

interface IType {
  name: string,
}

interface IAbilities {
  name: string,
  ability: IAbility,
}

interface IAbility {
  name: string,
}

interface ISkills {
  url: string,
  name: string,
  type: IType,
  game_index: number
}


