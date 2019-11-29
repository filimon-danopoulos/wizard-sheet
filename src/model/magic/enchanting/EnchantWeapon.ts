import Spell, { Category, School } from '../Spell'

export default class EnchantWeapon extends Spell {
  public readonly type: string = 'enchantweapon'
  constructor() {
    super({
      name: 'Enchant Weapon',
      description:
        'A target weapon is given a temporary magic boost by the spellcaster. Melee weapons affected by this spell count as magic weapons and give their users +1 Fight for the rest of the game. Bows and crossbows targeted by the spell give +1 Shoot instead, but do not count as magic weapons. Multiple castings of this spell on the same weapon have no effect. Alternatively, the spell can be used to enchant one arrow or quarrel. This gives +1 Shoot and counts as a magic weapon, but only for the next shot. A bow or crossbow boosted by Enchant Weapon may be used to fire arrows or quarrels similarly enchanted, and the bonuses stack.',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new EnchantWeapon()
    spell.difficulty = this.difficulty
    return spell
  }
}
