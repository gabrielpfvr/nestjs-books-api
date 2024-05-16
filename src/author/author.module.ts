import { Module } from "@nestjs/common";
import { Author } from "./model/author.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorController } from "./controller/author.controller";
import { AuthorService } from "./service/author.service";

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {}
