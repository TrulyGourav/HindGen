// src/citizen/citizen.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Citizen } from './citizen.entity';

@Injectable()
export class CitizenService {
  constructor(
    @InjectRepository(Citizen)
    private readonly citizenRepository: Repository<Citizen>,
  ) {}

  async findAll(): Promise<Citizen[]> {
    return await this.citizenRepository.find();
  }

  async findOne(id: number): Promise<Citizen> {
    return await this.citizenRepository.findOne({ where: { id } });
  }

  async create(citizenData: Partial<Citizen>): Promise<Citizen> {
    const citizen = await this.citizenRepository.create(citizenData);
    return await this.citizenRepository.save(citizen);
  }

  async update(id: number, citizenData: Partial<Citizen>): Promise<Citizen> {
    await this.citizenRepository.update(id, citizenData);
    return await this.citizenRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.citizenRepository.delete(id);
  }
}
