import Character from '../../Character'
import Resource from './Resource'

export default class EnchantersWorkshop extends Resource {
  public name: string = "Enchanter's Workshop"
  public description: string = 'Confers a +1 on all Animate Construct and Embed Enchantment spells.'
  public readonly type: string = 'enchantersworkshop'
  public readonly cost: number = 400
  public apply(character: Character): void {}
}
