import Character from '../Character'
import Base from './Base'

export default class Inn extends Base {
  public name: string = 'Inn'
  public description: string =
    'This old inn has plenty of room to house soldiers and their gear. The maximum warband size, including the wizard, is increased to 11.'
  public readonly type: string = 'inn'
  public apply(character: Character): void {}
}
