import { Module } from '@nestjs/common';
import { ActController } from './act.controller';
import { CodeService } from './services/code.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CodeSchema } from './shemas/code.schema';

const collections = [
  { name: 'codes', schema: CodeSchema },
];

@Module({
  imports: [MongooseModule.forFeature(collections)],
  controllers: [ActController],
  providers: [CodeService],
})

export class ActModule {}
