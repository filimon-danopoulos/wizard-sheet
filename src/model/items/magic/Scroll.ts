import Spell from '@/model/magic/Spell'
import SpellItem from './SpellItem'

export default class Scroll extends SpellItem {
  public readonly name: string = 'Scroll'
  public readonly type: string = 'scroll'
  public readonly description: string = ''
  public readonly cost: number = 400
}
