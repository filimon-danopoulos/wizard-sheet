import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Elementalist extends Wizard {
  public readonly type = 'elementalist' as string
  public readonly description = 'Elementalist' as string
  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Elementalism,
      allignedSchools: [School.Summoning, School.Enchanting, School.Chronomancy],
      neutralSchools: [
        School.Thaumaturgy,
        School.Soothsaying,
        School.Sigilism,
        School.Witchcraft,
        School.Necromancy
      ],
      opposedSchool: School.Illusionism
    })
  }
}
