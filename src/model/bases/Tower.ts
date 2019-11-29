import Character from '../Character'
import Base from './Base'

export default class Tower extends Base {
  public name: string = 'Tower'
  public description: string =
    'This half-ruined spire allows the wizard to get closer to the heavens and to clear his mind. The tower grants a +2 bonus to Reveal Secret spells.'
  public readonly type: string = 'tower'
  public apply(character: Character): void {}
}
