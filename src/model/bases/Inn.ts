import Character from '../Character'
import Base from './Base'

export default class Inn extends Base {
  public name: string = 'Inn'
  public description: string = 'Increase maximum warband size to 11'
  public readonly type: string = 'inn'
  public apply(character: Character): void {}
}
