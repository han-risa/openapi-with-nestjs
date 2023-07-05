/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PasiensModule } from "./pasiens.module";
import { PasiensServices } from "./pasiens.service";
import { PasiensController } from "./pasiens.controller";

@Module({
  imports: [PasiensModule],
  providers: [PasiensServices],
  controllers: [PasiensController]
})
export class UserHttpModule {}