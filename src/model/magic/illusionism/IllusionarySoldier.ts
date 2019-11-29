import Spell, { Category, School } from '../Spell'

export default class IllusionarySoldier extends Spell {
  public readonly type: string = 'illusionarysoldier'
  constructor() {
    super({
      name: 'Illusionary Soldier',
      description:
        'Causes an illusionary soldier to join the warband for the next battle. This soldier can be of any type. This soldier cannot pick up treasure, nor can it deal damage. If the soldier ever suffers damage of any type, it is removed. A warband may only have one illusionary soldier at any given time.',
      school: School.Illusionism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new IllusionarySoldier()
    spell.difficulty = this.difficulty
    return spell
  }
}
