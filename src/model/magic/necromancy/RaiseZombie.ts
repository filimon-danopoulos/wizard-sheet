import Spell, { Category, School } from '../Spell'

export default class RaiseZombie extends Spell {
  public readonly type: string = 'raisezombie'
  constructor() {
    super({
      name: 'Raise Zombie',
      description: '',
      school: School.Necromancy,
      category: Category.OutOfGame & Category.Touch,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new RaiseZombie()
    spell.difficulty = this.difficulty
    return spell
  }
}
