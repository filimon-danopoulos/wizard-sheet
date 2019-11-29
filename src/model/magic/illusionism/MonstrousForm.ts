import Spell, { Category, School } from '../Spell'

export default class MonstrousForm extends Spell {
  public readonly type: string = 'monstrousform'
  constructor() {
    super({
      name: 'Monstrous Form',
      description:
        'Any figure wishing to move into contact with the spellcaster must make an immediate Will roll versus the casting roll. If failed, the figure sees a hideous creature instead of the spellcaster and is too scared to attack – he may only make a move that takes him further away. A spellcaster may not have Beauty and Monstrous Form cast at the same time. Undead, constructs, and demons are immune to Monstrous Form. ',
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new MonstrousForm()
    spell.difficulty = this.difficulty
    return spell
  }
}
