import { Screen } from './screen.entity';
import { Parameter } from './parameter.entity';
import { ServerTimeInfo } from './server-time-info.entity';

export class PlayerDto {
  screen: Screen;
  dosyaUrl: Parameter;
  serverTimeInfo: ServerTimeInfo;
  notActive: boolean;
  registered: boolean;
}
