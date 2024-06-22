import { TrackerRequest } from "../models/tracker-request.model";
import { TrackerResponse } from "../models/tracker-response.model";

export abstract class TrackerRepository {
  abstract findAll(): Promise<TrackerResponse[]>;
  abstract create(tracker: TrackerRequest): Promise<TrackerResponse>;
}
