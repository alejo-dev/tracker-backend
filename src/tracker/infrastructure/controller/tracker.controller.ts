import { Body, Controller, Get, Post } from "@nestjs/common";
import {
  CreateTrackerCommand,
  CreateTrackerCommandHandler,
} from "tracker/application";
import { FindAllTrackerQueryHandler } from "tracker/application/handlers/queries/find-all-tracker.query.handler";
import { trackerDto } from "../dto/tracker.dto";

@Controller("tracker")
export class TrackerController {
  constructor(
    private findAllTrackerQueryHandler: FindAllTrackerQueryHandler,
    private createTrackerCommandHandler: CreateTrackerCommandHandler
  ) {}

  @Get()
  async findAll(): Promise<any> {
    return this.findAllTrackerQueryHandler.execute();
  }

  @Post()
  async create(@Body() tracker: trackerDto): Promise<any> {
    const command = new CreateTrackerCommand(
      tracker.project,
      tracker.description,
      tracker.time
    );
    return this.createTrackerCommandHandler.execute(command);
  }
}
