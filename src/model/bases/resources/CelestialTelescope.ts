import Character from '../../Character'
import Resource from './Resource'

export default class CelestialTelescope extends Resource {
  public name: string = 'Celestial Telescope'
  public description: string =
    'Aids the wizard in divining the future. Once per game, he may add +2 to an initiative roll.'
  public readonly type: string = 'celestialtelescope'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
