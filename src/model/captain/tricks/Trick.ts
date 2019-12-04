import JSONSerializable from '@/model/JSONSerializable'

export type trickTiming =
  | 'Before Rolls'
  | 'After Rolls'
  | 'Upon Activation'
  | 'After Damage is Calculated'

export default abstract class Trick extends JSONSerializable {
  public abstract readonly name: string
  public abstract readonly description: string
  public abstract timing: trickTiming
  public used: Boolean = false

  public use(): void {
    this.used = true
  }
}
