import { Screen } from './screen.entity';
import { Parameter } from './parameter.entity';

export class ServerTimeInfo {
  constructor() {
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1;
    this.day = now.getDate();
    this.hour = now.getHours();
    this.minute = now.getMinutes();
    this.second = now.getSeconds();
  }

  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}
