import Character from '../../Character'
import Resource from './Resource'

export default class CarrierPidgeons extends Resource {
  public name: string = 'Carrier Pidgeons'
  public description: string =
    'Carrier pigeons allow a wizard to more easily get messages to his agents outside Frostgrave. Soldiers hired by the wizard cost 1gc less'
  public readonly type: string = 'carrierpidgeons'
  public readonly cost: number = 5
  public apply(character: Character): void {}
}
