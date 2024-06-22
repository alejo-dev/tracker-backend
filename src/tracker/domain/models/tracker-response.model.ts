export class TrackerResponse {
  constructor(
    public readonly id,
    public readonly project: string,
    public readonly description: string,
    public readonly time: number
  ) {}
}
