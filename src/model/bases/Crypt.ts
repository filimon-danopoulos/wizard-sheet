import Character from '../Character'
import Base from './Base'

export default class Crypt extends Base {
  public name: string = 'Crypt'
  public description: string = '+2 when casting Raise Zombie'
  public readonly type: string = 'crypt'
  public apply(character: Character): void {}
}
