import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Soothsayer extends Wizard {
  public readonly type = 'soothsayer' as string
  public readonly description = 'Soothsayer' as string

  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Soothsaying,
      allignedSchools: [School.Thaumaturgy, School.Chronomancy, School.Illusionism],
      neutralSchools: [
        School.Enchanting,
        School.Summoning,
        School.Necromancy,
        School.Elementalism,
        School.Sigilism
      ],
      opposedSchool: School.Witchcraft
    })
  }
}
