import Character from '../../Character'
import Resource from './Resource'

export default class Scriptorium extends Resource {
  public name: string = 'Scriptorium'
  public readonly type: string = 'scriptorium'
  public readonly cost: number = 300
  public apply(character: Character): void {}
}
