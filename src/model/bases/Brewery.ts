import Character from '../Character'
import Base from './Base'

export default class Brewery extends Base {
  public name: string = 'Brewery'
  public description: string = 'Soldiers cost 5gc less. Gain 10gc after each game.'
  public readonly type: string = 'brewery'
  public apply(character: Character): void {}
}
