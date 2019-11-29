import Character from '../../Character'
import Resource from './Resource'

export default class GiantCauldron extends Resource {
  public name: string = 'Giant Cauldron'
  public description: string = 'Confers a +1 on all Brew Potion spells.'
  public readonly type: string = 'giantcauldron'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
