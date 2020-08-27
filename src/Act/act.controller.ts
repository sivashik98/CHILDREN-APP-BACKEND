import { Controller, Get, Post, Body, Redirect, Param, HostParam } from '@nestjs/common';
import { CodeService } from './services/code.service';

@Controller('act')
export class ActController {
  constructor(private codeService: CodeService) {}


  @Post('generate/code')
  registerParent(@Body() body): string {
    console.log(body)
    this.codeService.createModelMongoCode(body);

    return 'modelCode'
  }
}
