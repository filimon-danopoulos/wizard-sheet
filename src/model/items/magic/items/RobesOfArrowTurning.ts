import MagicItem from '@/model/items/magic/items/MagicItem'

export default class RobesOfArrowTurning extends MagicItem {
  public readonly type: string = 'robesofarrowturning'
  public readonly name: string = 'Robes of Arrow Turning'
  public readonly cost: number = 500
  public readonly description: string =
    'The wearer gains +4 Armour against all bow and crossbow attacks, even if they are magic weapons.'
}
