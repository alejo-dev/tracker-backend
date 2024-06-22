import { Injectable } from "@nestjs/common";
import { TrackerRepository } from "tracker/domain";

@Injectable()
export class FindAllTrackerQueryHandler {
  constructor(private trackerRepository: TrackerRepository) {}
  async execute() {
    return await this.trackerRepository.findAll();
  }
}
