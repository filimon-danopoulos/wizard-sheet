import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Sigilist extends Wizard {
  public readonly type = 'sigilist' as string
  constructor(name: string, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Sigilist',
      primarySchool: School.Sigilism,
      allignedSchools: [School.Thaumaturgy, School.Illusionism, School.Enchanting],
      neutralSchools: [
        School.Necromancy,
        School.Elementalism,
        School.Witchcraft,
        School.Chronomancy,
        School.Soothsaying
      ],
      opposedSchool: School.Summoning,
      weapon: weapon
    })
  }
}
