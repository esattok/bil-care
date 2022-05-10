import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personsRepository: Repository<Person>,
  ) {}

  create(person: Person) {
    return this.personsRepository.save(person);
  }

  findAll(): Promise<Person[]> {
    return this.personsRepository.find();
  }

  findOne(id: number): Promise<Person> {
    return this.personsRepository.findOne(id);
  }

  update(id: number, group: Person) {
    return this.personsRepository.update(id, group);
  }

  remove(id: number) {
    return this.personsRepository.delete(id);
  }
}
