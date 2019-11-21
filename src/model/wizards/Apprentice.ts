import Staff from '../items/basic/weapons/Staff'
import Wizard from './Wizard'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Character, { ISpellcaster, IMercenary } from '../Character'
import Spell from '../magic/Spell'

export default class Apprentice extends Character implements ISpellcaster, IMercenary {
  public readonly type = 'apprentice'
  private readonly wizard: Wizard
  public readonly cost: number
  public get spells(): Spell[] {
    return this.wizard.spells.map(spell => {
      return new Spell({
        school: spell.school,
        category: spell.category,
        difficulty: spell.difficulty + 2,
        effect: spell.effect
      })
    })
  }

  constructor(name: string, wizard: Wizard, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Apprentice',
      move: 6,
      fight: wizard.fight.base - 2,
      shoot: wizard.shoot.base - 2,
      will: wizard.will.base - 2,
      health: wizard.health.base - 4,
      items: [weapon],
      maxEquipment: 4
    })
    this.wizard = wizard
    this.cost = (wizard.level - 10) * 10 + 300
  }
  public toJSON(): string {
    return JSON.stringify({
      type: 'apprentice',
      name: this.name
    })
  }
  public fromJSON(json: string): void {
    const data = JSON.parse(json)
    this._name = data.name
  }
}
