import Item from '../../Item'
import Character, { Effect } from '@/model/Character'

export default abstract class MagicItem extends Item {
  constructor() {
    super(false)
  }
}
