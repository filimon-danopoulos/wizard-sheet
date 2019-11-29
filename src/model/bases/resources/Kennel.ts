import Character from '../../Character'
import Resource from './Resource'

export default class Kennel extends Resource {
  public name: string = 'Kennel'
  public description: string =
    'Allows a wizard to keep one war hound in his warband above his normal warband limit.'
  public readonly type: string = 'kennel'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
