import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from './services/user.service';
import { PairService } from './services/pair.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './shemas/user.schema';
import { PairSchema } from './shemas/pair.schema';

const collections = [
  { name: 'users', schema: UserSchema },
  { name: 'pairs', schema: PairSchema }
];

@Module({
  imports: [MongooseModule.forFeature(collections)],
  controllers: [AuthController],
  providers: [UserService, PairService],
})

export class AuthModule {}
