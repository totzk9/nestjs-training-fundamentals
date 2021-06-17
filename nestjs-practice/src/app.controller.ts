import { Controller, Get, Header, HttpCode, Param, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // @HttpCode(201)
  // @Header('Cache-Control', 'none')
  // // @Redirect('google.com', 401) URL, STATUS CODE
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get(':id')
  // withParam(@Param() params) : string {
  //   console.log(params.id)
  //   return `this action returens a params id`
  // }

  // @Get(':id')
  // withParam(@Param('id') id: string): string {
  //   return `this action returns ${id}`
  // }


}
