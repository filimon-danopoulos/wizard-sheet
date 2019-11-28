import Character from '../../Character'
import Resource from './Resource'

export default class SarcophagusOfHealing extends Resource {
  public name: string = 'SarcophagusOfHealing'
  public readonly type: string = 'sarcophagusofhealing'
  public readonly cost: number = 200
  public apply(character: Character): void {}
}
