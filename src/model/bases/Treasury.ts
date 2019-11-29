import Character from '../Character'
import Base from './Base'

export default class Treasury extends Base {
  public name: string = 'Treasury'
  public description: string =
    'This treasury has remained relatively untouched and many of its vaults are still sealed. After each game, the warband may attempt to open a vault. Roll one die. If the result is 2–18 add that many gc to the warband’s treasury. If a 19 is rolled, add 100gc. If a 20 is rolled, the warband finds a treasure – determine what it is exactly as for a treasure token captured during a game. If a 1 is rolled, the warband has set off a magic trap – a warband member of the player’s choice is injured and must miss the next game while he recovers.'
  public readonly type: string = 'treasury'
  public apply(character: Character): void {}
}
