import MagicItem from '@/model/items/magic/items/MagicItem'

export default class RingOfSlowFall extends MagicItem {
  public readonly type: string = 'ringofslowfall'
  public readonly name: string = 'Ring of Slow Fall'
  public readonly cost: number = 200
  public readonly description: string =
    'The wearer of this ring will never suffer any damage from falling, no matter how great the distance from which he falls/jumps.'
}
