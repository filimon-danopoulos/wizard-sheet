import Wizard from './Wizard'
import { School } from '../magic/Spell'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Staff from '../items/basic/weapons/Staff'

export default class Illusionist extends Wizard {
  public readonly type = 'illusionist' as string
  public readonly description = 'Illusionist' as string
  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Illusionism,
      allignedSchools: [School.Soothsaying, School.Sigilism, School.Thaumaturgy],
      neutralSchools: [
        School.Necromancy,
        School.Witchcraft,
        School.Chronomancy,
        School.Summoning,
        School.Enchanting
      ],
      opposedSchool: School.Elementalism
    })
  }
}
