import { Injectable } from "@nestjs/common";
import { TrackerRepository, TrackerRequest } from "tracker/domain";

export class CreateTrackerCommand {
  constructor(
    public readonly project,
    public readonly description,
    public readonly time
  ) {}
}

@Injectable()
export class CreateTrackerCommandHandler {
  constructor(private trackerRepository: TrackerRepository) {}
  async execute(command: CreateTrackerCommand) {
    return await this.trackerRepository.create(
      new TrackerRequest(command.project, command.description, command.time)
    );
  }
}
