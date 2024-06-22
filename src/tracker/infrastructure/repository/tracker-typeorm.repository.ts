import { Injectable } from "@nestjs/common";
import {
  TrackerRepository,
  TrackerRequest,
  TrackerResponse,
} from "tracker/domain";
import { TrackertMapper } from "../mappers/tracker.mapper";
import { TrackerEntity } from "../persistence/entities/tracker.entity";

@Injectable()
export class TrackerTypeormRepository extends TrackerRepository {
  public async findAll(): Promise<TrackerResponse[]> {
    const trackerList = await TrackerEntity.find();
    return TrackertMapper.fromEntityArrayToModelArray(trackerList);
  }

  public async create(tracker: TrackerRequest): Promise<TrackerResponse> {
    const trackerEntity = new TrackerEntity();
    trackerEntity.project = tracker.project;
    trackerEntity.description = tracker.description;
    trackerEntity.time = tracker.time;

    const newEntity = await trackerEntity.save();

    return TrackertMapper.fromEntityToModelResponse(newEntity);
  }
}
