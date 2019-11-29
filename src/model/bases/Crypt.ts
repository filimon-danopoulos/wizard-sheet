import Character from '../Character'
import Base from './Base'

export default class Crypt extends Base {
  public name: string = 'Crypt'
  public description: string =
    'It’s not the most comfortable place to sleep, but it is full of ’supplies’. Spellcasters receive a +2 bonus on all Raise Zombie spells.'
  public readonly type: string = 'crypt'
  public apply(character: Character): void {}
}
