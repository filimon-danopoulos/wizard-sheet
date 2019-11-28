import Character from '../Character'
import Base from './Base'

export default class Treasury extends Base {
  public name: string = 'Treasury'
  public description: string =
    "After each game, roll one die. On 2–18 gain that many gc. On a 19 gain 100gc. On a 20 gain a treasure. On a 1 a warband member of the player's choice must miss the next game."
  public readonly type: string = 'treasury'
  public apply(character: Character): void {}
}
