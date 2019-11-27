import Spell, { Category, School } from '../Spell'

export default class DestructiveSphere extends Spell {
  public readonly type: string = 'destructivesphere'
  constructor() {
    super({
      name: 'Destructive Sphere',
      description: '',
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
