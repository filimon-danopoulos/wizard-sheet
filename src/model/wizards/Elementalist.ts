import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Elementalist extends Wizard {
  public readonly type = 'elementalist' as string
  constructor(name: string, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Elementalist',
      primarySchool: School.Elementalism,
      allignedSchools: [School.Summoning, School.Enchanting, School.Chronomancy],
      neutralSchools: [
        School.Thaumaturgy,
        School.Soothsaying,
        School.Sigilism,
        School.Witchcraft,
        School.Necromancy
      ],
      opposedSchool: School.Illusionism,
      weapon: weapon
    })
  }
}
