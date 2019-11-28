import Character from '../../Character'
import Resource from './Resource'

export default class EnchantersWorkshop extends Resource {
  public name: string = "Enchanter's Workshop"
  public readonly type: string = 'enchantersworkshop'
  public readonly cost: number = 400
  public apply(character: Character): void {}
}
