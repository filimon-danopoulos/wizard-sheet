import Wizard, { IWizardData } from './Wizard'
import { School } from '../magic/Spell'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Staff from '../items/basic/weapons/Staff'

export default class Chronomancer extends Wizard {
  public readonly type = 'chronomancer' as string
  public readonly description = 'Chronomancer' as string
  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Chronomancy,
      allignedSchools: [School.Necromancy, School.Soothsaying, School.Elementalism],
      neutralSchools: [
        School.Thaumaturgy,
        School.Summoning,
        School.Illusionism,
        School.Witchcraft,
        School.Sigilism
      ],
      opposedSchool: School.Enchanting
    })
  }
}
