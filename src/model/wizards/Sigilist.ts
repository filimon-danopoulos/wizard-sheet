import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Sigilist extends Wizard {
  public readonly type = 'sigilist' as string
  public readonly description = 'Sigilist' as string

  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Sigilism,
      allignedSchools: [School.Thaumaturgy, School.Illusionism, School.Enchanting],
      neutralSchools: [
        School.Necromancy,
        School.Elementalism,
        School.Witchcraft,
        School.Chronomancy,
        School.Soothsaying
      ],
      opposedSchool: School.Summoning
    })
  }
}
