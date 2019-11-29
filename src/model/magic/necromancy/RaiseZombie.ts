import Spell, { Category, School } from '../Spell'

export default class RaiseZombie extends Spell {
  public readonly type: string = 'raisezombie'
  constructor() {
    super({
      name: 'Raise Zombie',
      description:
        'This spell can be used both ‘Out of Game’ and during the game. If successful, the spellcaster adds one zombie to his warband (see Chapter 6: Bestiary). If the spell is cast before the game, the zombie can be deployed normally. If it is cast during a game, the zombie appears in base contact with the spellcaster. A warband may only have one raised zombie at any one time. If the zombie is killed during a game, Raise Zombie can be cast again to create another. A raised zombie does not count towards the warband size limit and remains with a warband until the end of the game, at which point it crumbles into dust.',
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
