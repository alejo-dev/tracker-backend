export class TrackerRequest {
  constructor(
    public readonly project: string,
    public readonly description: string,
    public readonly time: number
  ) {}
}
