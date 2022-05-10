import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parameter } from './entities/parameter.entity';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(Parameter)
    private parametersRepository: Repository<Parameter>,
  ) {}

  async create(parameter: Parameter) {
    return await this.parametersRepository.save(parameter);
  }

  findAll(): Promise<Parameter[]> {
    return this.parametersRepository.find();
  }

  findOne(id: number): Promise<Parameter> {
    return this.parametersRepository.findOne(id);
  }

  update(id: number, parameter: Parameter) {
    return this.parametersRepository.update(id, parameter);
  }

  remove(id: number) {
    return this.parametersRepository.delete(id);
  }
}
