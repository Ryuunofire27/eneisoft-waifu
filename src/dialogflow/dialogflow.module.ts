import { Module } from "@nestjs/common";
import { DialogflowProviders } from "./dialogflow.provider";
import { DialogflowService } from "./dialogflow.service";
import { DialogflowHelper } from "./dialogflow.helper";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    DialogflowHelper,
    ...DialogflowProviders,
    DialogflowService
  ]
})
export class DialogflowModule{}