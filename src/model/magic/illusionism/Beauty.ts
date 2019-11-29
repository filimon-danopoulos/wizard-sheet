import Spell, { Category, School } from '../Spell'

export default class Beauty extends Spell {
  public readonly type: string = 'beauty'
  constructor() {
    super({
      name: 'Beauty',
      description:
        'This spell causes all humans (i.e. anything not found in Chapter 6: Bestiary) who look at the spellcaster to see a paragon of beauty. Anyone wishing to attack the spellcaster must first pass a Will roll versus the casting roll. Failing this Will roll does not cause the would-be attacker to lose an action. Any model magically compelled to fight the target must also pass a Will roll or suffer -1 to its Fight stat.',
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Beauty()
    spell.difficulty = this.difficulty
    return spell
  }
}
