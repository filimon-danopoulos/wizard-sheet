import Character from '../Character'
import Base from './Base'

export default class Brewery extends Base {
  public name: string = 'Brewery'
  public description: string =
    'There is still some life left in those old casks, and the warband takes full advantage. All soldiers hired by the warband cost 5gc less than the standard price. In addition, the warband gains an additional 10gc after each game through the sale of excess stock.'
  public readonly type: string = 'brewery'
  public apply(character: Character): void {}
}
