import Character from '../Character'
import Base from './Base'

export default class Laboratory extends Base {
  public name: string = 'Laboratory'
  public description: string = 'Gain 20 experience after each game.'
  public readonly type: string = 'laboratory'
  public apply(character: Character): void {}
}
