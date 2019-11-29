import Character from '../Character'
import Base from './Base'

export default class Temple extends Base {
  public name: string = 'Temple'
  public description: string =
    'The ruins of this once-holy building still project an aura of calm. Spellcasters receive a +1 bonus to any castings of Miraculous Cure or Restore Life spells.'
  public readonly type: string = 'temple'
  public apply(character: Character): void {}
}
