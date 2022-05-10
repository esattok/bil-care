import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}

  create(dto: Doctor) {
    return this.doctorsRepository.save(dto);
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find();
  }

  findOne(id: number): Promise<Doctor> {
    return this.doctorsRepository.findOne(id);
  }

  update(id: number, dto: Doctor) {
    return this.doctorsRepository.update(id, dto);
  }

  remove(id: number) {
    return this.doctorsRepository.delete(id);
  }
}
