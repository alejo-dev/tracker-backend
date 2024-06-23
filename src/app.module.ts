import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TrackerEntity } from "tracker/infrastructure";
import { TrackerModule } from "tracker/tracker.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "database-1.ctkiiqee25a3.us-east-1.rds.amazonaws.com",
      port: 3306,
      username: "root",
      password: "abc$123456",
      database: "tracker-db",
      entities: [TrackerEntity],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "/build/"),
    }),
    TrackerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
