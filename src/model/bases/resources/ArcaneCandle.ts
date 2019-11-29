import Character from '../../Character'
import Resource from './Resource'

export default class ArcaneCandle extends Resource {
  public name: string = 'Arcane Candle'
  public description: string = 'Confers a +1 on Bind Demon spells.'
  public readonly type: string = 'arcanecandle'
  public readonly cost: number = 100
  public apply(character: Character): void {}
}
