import MagicItem from '@/model/items/magic/items/MagicItem'

export default class RingOfTeleportation extends MagicItem {
  public readonly type: string = 'ringofteleportation'
  public readonly name: string = 'Ring of Teleportation'
  public readonly cost: number = 300
  public readonly description: string =
    'Once per game, the wearer of this ring may spend an action to teleport up to 8”, anywhere within line of sight, but not off the board. This teleportation may be used to enter or leave combat.'
}
