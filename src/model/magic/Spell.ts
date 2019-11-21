export enum School {
  Chronomancy,
  Elementalism,
  Enchanting,
  Illusionism,
  Necromancy,
  Sigilism,
  Soothsaying,
  Summoning,
  Thaumaturgy,
  Witchcraft
}

export enum Category {
  OutOfGame,
  SelfOnly,
  LineOfSight,
  AreaEffect,
  Touch
}

export interface ISpellConfig {
  category: Category
  school: School
  difficulty: number
  effect: string
}

export default class Spell {
  public readonly category: Category
  public readonly school: School
  public readonly difficulty: number
  public readonly effect: string

  constructor(config: ISpellConfig) {
    this.category = config.category
    this.school = config.school
    this.difficulty = config.difficulty
    this.effect = config.effect
  }
}
