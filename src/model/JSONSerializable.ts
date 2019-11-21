export default abstract class JSONSerializable {
  public abstract readonly type: string
  public abstract toJSON(): string
  public abstract fromJSON(json: string): void
}
