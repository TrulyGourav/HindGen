// src/citizen/citizen.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Citizen } from './citizen.entity';
import { CitizenService } from './citizen.service';

@Controller('citizens')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}

  @Get()
  findAll(): Promise<Citizen[]> {
    return this.citizenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Citizen> {
    return this.citizenService.findOne(+id);
  }

  @Post()
  create(@Body() citizenData: Partial<Citizen>): Promise<Citizen> {
    return this.citizenService.create(citizenData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() citizenData: Partial<Citizen>): Promise<Citizen> {
    return this.citizenService.update(+id, citizenData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.citizenService.remove(+id);
  }
}
