import Character from '../../Character'
import Resource from './Resource'

export default class ArcaneCandle extends Resource {
  public name: string = 'Arcane Candle'
  public description: string = '+1 when casting Bind Demon'
  public readonly type: string = 'arcanecandle'
  public readonly cost: number = 100
  public apply(character: Character): void {}
}
