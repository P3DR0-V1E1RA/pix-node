import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): number {
    return this.appService.getHello();
  }
  @Get("students")
  getstudents(): string[] {
    return ["Roney", "Deivid", "Vínicius"];
}
  @Get("studentswhitho")
  getstudentswhito(): string[] {
   return ["Roney", "Deivid", "Vínicius"].filter(name => name.includes("o"));
}


 }
