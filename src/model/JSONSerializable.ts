export default abstract class JSONSerializable {
  public abstract readonly type: string
  public abstract toJSON(): any
  public abstract fromJSON(json: any): void
}
