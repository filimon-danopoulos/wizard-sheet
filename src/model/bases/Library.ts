import Character from '../Character'
import Base from './Base'

export default class Library extends Base {
  public name: string = 'Library'
  public description: string =
    'After each roll a die. On a 17–19 gain a random scroll. On a 20 gain a random grimoire.'
  public readonly type: string = 'Library'
  public apply(character: Character): void {}
}
