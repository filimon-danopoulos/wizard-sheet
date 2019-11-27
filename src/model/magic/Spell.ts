import JSONSerializable from '../JSONSerializable'

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
  name: string
  description: string
  category: Category
  school: School
  difficulty: number
  effect: string
}

export default abstract class Spell extends JSONSerializable {
  public readonly name: string
  public readonly description: string
  public readonly category: Category
  public readonly school: School
  public readonly effect: string
  public difficulty: number

  constructor(config: ISpellConfig) {
    super()
    this.name = config.name
    this.description = config.description
    this.category = config.category
    this.school = config.school
    this.difficulty = config.difficulty
    this.effect = config.effect
  }

  public abstract copy(): Spell
}
