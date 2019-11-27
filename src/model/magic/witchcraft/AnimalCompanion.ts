import Spell, { Category, School } from '../Spell'

export default class AnimalCompanion extends Spell {
  public readonly type: string = 'animalcompanion'
  constructor() {
    super({
      name: 'Animal Companion',
      description: '',
      school: School.Witchcraft,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new AnimalCompanion()
    spell.difficulty = this.difficulty
    return spell
  }
}
