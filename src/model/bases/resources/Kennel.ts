import Character from '../../Character'
import Resource from './Resource'

export default class Kennel extends Resource {
  public name: string = 'Kennel'
  public description: string = 'Grants an extra War Hound above the warband limit'
  public readonly type: string = 'kennel'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
