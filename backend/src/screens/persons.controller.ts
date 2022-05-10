import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PersonsService } from './persons.service';
import { Person } from './entities/person.entity';
import { getHashed } from '../global/utils';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/constants';

@UseGuards(JwtAuthGuard)
@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Roles(ROLES.admin)
  @Post()
  async create(@Body() person: Person) {
    if (person.id && !person.updatePassword) {
      const updatingPerson = new Person();
      updatingPerson.id = person.id;
      updatingPerson.email = person.email;
      updatingPerson.name = person.name;
      updatingPerson.roles = person.roles;
      return this.personsService.create(updatingPerson);
    } else {
      person.password = await getHashed(person.password);
      return this.personsService.create(person);
    }
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get()
  async findAll() {
    const persons = await this.personsService.findAll();
    for (const person of persons) {
      person.password = undefined;
    }
    return persons;
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personsService.findOne(+id);
  }

  @Roles(ROLES.admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() person: Person) {
    return this.personsService.update(+id, person);
  }

  @Roles(ROLES.admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personsService.remove(+id);
  }
}
