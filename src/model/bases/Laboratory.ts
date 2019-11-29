import Character from '../Character'
import Base from './Base'

export default class Laboratory extends Base {
  public name: string = 'Laboratory'
  public description: string =
    'A mostly still-standing residence of a wizard from long ago. It is still filled with his notes and experiments. A wizard gains 20 experience points after each game from what he learns in the house.'
  public readonly type: string = 'laboratory'
  public apply(character: Character): void {}
}
