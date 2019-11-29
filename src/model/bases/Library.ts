import Character from '../Character'
import Base from './Base'

export default class Library extends Base {
  public name: string = 'Library'
  public description: string =
    'One of the many libraries scattered throughout the city. The volumes contained within this one have fallen to the ravages of weather and time. A few valuable texts have survived, however. After each game the warband may roll one die. On a 17–19, they find a random scroll. On a 20 they discover a random grimoire. '
  public readonly type: string = 'Library'
  public apply(character: Character): void {}
}
