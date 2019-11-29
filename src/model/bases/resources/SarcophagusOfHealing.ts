import Character from '../../Character'
import Resource from './Resource'

export default class SarcophagusOfHealing extends Resource {
  public name: string = 'Sarcophagus Of Healing'
  public description: string =
    'The wizard does not have to miss a game, or pay a fee, when he is Badly Wounded, and pays 10gc less if he has any Niggling Injuries.'
  public readonly type: string = 'sarcophagusofhealing'
  public readonly cost: number = 200
  public apply(character: Character): void {}
}
