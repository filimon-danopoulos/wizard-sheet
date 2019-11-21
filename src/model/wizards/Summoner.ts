import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Summoner extends Wizard {
  public readonly type = 'summoner' as string
  constructor(name: string, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Summoner',
      primarySchool: School.Summoning,
      allignedSchools: [School.Necromancy, School.Witchcraft, School.Elementalism],
      neutralSchools: [
        School.Soothsaying,
        School.Enchanting,
        School.Illusionism,
        School.Chronomancy,
        School.Thaumaturgy
      ],
      opposedSchool: School.Sigilism,
      weapon: weapon
    })
  }
}
