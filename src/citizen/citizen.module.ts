// src/citizen/citizen.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citizen } from './citizen.entity';
import { CitizenController } from './citizen.controller';
import { CitizenService } from './citizen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Citizen])],
  controllers: [CitizenController],
  providers: [CitizenService],
})
export class CitizenModule {}
