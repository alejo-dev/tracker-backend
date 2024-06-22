import { Provider } from "@nestjs/common";
import { TrackerRepository } from "tracker/domain";
import { TrackerTypeormRepository } from "../repository/tracker-typeorm.repository";

export const TrackerTypeormRepositoryProvider: Provider = {
  provide: TrackerRepository,
  useClass: TrackerTypeormRepository,
};
