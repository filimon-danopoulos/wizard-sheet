import Character from '../../Character'
import Resource from './Resource'

export default class GiantCauldron extends Resource {
  public name: string = 'GiantCauldron'
  public readonly type: string = 'giantcauldron'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
