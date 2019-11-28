import Character from '../Character'
import Base from './Base'

export default class Temple extends Base {
  public name: string = 'Temple'
  public description: string = '+1 when casting Miraculous Cure or Restore Life'
  public readonly type: string = 'temple'
  public apply(character: Character): void {}
}
