import Spell, { Category, School } from '../Spell'

export default class DestructiveSphere extends Spell {
  public readonly type: string = 'destructivesphere'
  constructor() {
    super({
      name: 'Destructive Sphere',
      description: 'Every figure within 3” of the spellcaster suffers a +5 attack.',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new DestructiveSphere()
    spell.difficulty = this.difficulty
    return spell
  }
}
