import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(TrackerEntity)
  //   private readonly trackerRepository: Repository<TrackerEntity>
  // ) {}
  getHello(): string {
    return "Hello World!";
  }

  // getTracker() {
  //   return this.trackerRepository.find();
  // }
}
