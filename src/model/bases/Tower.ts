import Character from '../Character'
import Base from './Base'

export default class Tower extends Base {
  public name: string = 'Tower'
  public description: string = '+2 when casting Reveal Secrets'
  public readonly type: string = 'tower'
  public apply(character: Character): void {}
}
