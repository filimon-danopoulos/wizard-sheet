import Spell, { Category, School } from '../Spell'

export default class PoisonDart extends Spell {
  public readonly type: string = 'poisondart'
  constructor() {
    super({
      name: 'Poison Dart',
      description:
        'The spellcaster flings a small dart coated in a potent poison. The spellcaster makes an immediate +5 shooting attack against any figure in line of sight. If the attack beats the target’s Armour it causes no damage, but he loses one of his two standard actions per activation for the rest of the game, or until healed by either a Heal spell or a Healing Potion. The remaining action does not have to be the otherwise compulsory movement. Multiple Poison Darts against the same figure have no effect.',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new PoisonDart()
    spell.difficulty = this.difficulty
    return spell
  }
}
