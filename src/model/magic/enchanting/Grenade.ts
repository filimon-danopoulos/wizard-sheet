import Spell, { Category, School } from '../Spell'

export default class Grenade extends Spell {
  public readonly type: string = 'grenade'
  constructor() {
    super({
      name: 'Grenade',
      description:
        'The spellcaster takes an object, commonly a simple rock, imbues it with magic energy and throws it at his target, whereupon it explodes into hundreds of fragments. The caster picks a target point within 12”. Every figure, including allies, within 1.5” of that point immediately suffers a +3 shooting attack. ',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Grenade()
    spell.difficulty = this.difficulty
    return spell
  }
}
