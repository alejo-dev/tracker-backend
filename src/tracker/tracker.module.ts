import { Module } from "@nestjs/common";
import { FindAllTrackerQueryHandler } from "./application/handlers/queries/find-all-tracker.query.handler";
import {
  TrackerController,
  TrackerTypeormRepositoryProvider,
} from "./infrastructure";
import { CreateTrackerCommandHandler } from "./application";

@Module({
  imports: [],
  controllers: [TrackerController],
  providers: [
    FindAllTrackerQueryHandler,
    CreateTrackerCommandHandler,
    TrackerTypeormRepositoryProvider,
  ],
})
export class TrackerModule {}
