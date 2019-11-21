import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Enchanter extends Wizard {
  public readonly type = 'enchanter' as string
  constructor(name: string, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Enchanter',
      primarySchool: School.Enchanting,
      allignedSchools: [School.Witchcraft, School.Sigilism, School.Elementalism],
      neutralSchools: [
        School.Necromancy,
        School.Illusionism,
        School.Summoning,
        School.Soothsaying,
        School.Thaumaturgy
      ],
      opposedSchool: School.Chronomancy,
      weapon: weapon
    })
  }
}
