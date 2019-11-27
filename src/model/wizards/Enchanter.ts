import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Enchanter extends Wizard {
  public readonly type = 'enchanter' as string
  public readonly description = 'Enchanter' as string
  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Enchanting,
      allignedSchools: [School.Witchcraft, School.Sigilism, School.Elementalism],
      neutralSchools: [
        School.Necromancy,
        School.Illusionism,
        School.Summoning,
        School.Soothsaying,
        School.Thaumaturgy
      ],
      opposedSchool: School.Chronomancy
    })
  }
}
