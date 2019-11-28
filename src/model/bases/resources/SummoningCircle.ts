import Character from '../../Character'
import Resource from './Resource'

export default class SummoningCircle extends Resource {
  public name: string = 'Summoning Circle'
  public description: string = 'Summon Demon can be cast out of game'
  public readonly type: string = 'summoningcircle'
  public readonly cost: number = 300
  public apply(character: Character): void {}
}
