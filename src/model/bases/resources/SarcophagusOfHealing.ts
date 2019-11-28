import Character from '../../Character'
import Resource from './Resource'

export default class SarcophagusOfHealing extends Resource {
  public name: string = 'Sarcophagus Of Healing'
  public description: string = 'Badly Wounded has no effect and Niggling Injuries cost 10gc'
  public readonly type: string = 'sarcophagusofhealing'
  public readonly cost: number = 200
  public apply(character: Character): void {}
}
