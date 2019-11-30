import Spell, { Category, School } from '../Spell'

export default class ControlAnimal extends Spell {
  public readonly type: string = 'controlanimal'
  constructor() {
    super({
      name: 'Control Animal',
      description:
        'If successfully cast, the target animal must make an immediate Will roll versus the casting roll. If the roll fails, the spellcaster gains control of the animal for the rest of the game. A spellcaster can only control one animal at a time.',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ControlAnimal()
    spell.difficulty = this.difficulty
    return spell
  }
}
