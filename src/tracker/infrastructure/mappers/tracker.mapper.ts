import { TrackerResponse } from "tracker/domain";
import { TrackerEntity } from "../persistence/entities/tracker.entity";

export class TrackertMapper {
  public static fromEntityArrayToModelArray(
    trackerList: TrackerEntity[]
  ): TrackerResponse[] {
    return trackerList.map(
      (track) =>
        new TrackerResponse(
          track.id,
          track.project,
          track.description,
          track.time
        )
    );
  }

  public static fromEntityToModelResponse(
    tracker: TrackerEntity
  ): TrackerResponse {
    const trackerResponse = <TrackerResponse>{
      id: tracker.id,
      project: tracker.project,
      description: tracker.description,
      time: tracker.time,
    };

    return trackerResponse;
  }
}
