import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://maksim:Mamaelena1973@cluster0.098kh.mongodb.net/ChildrenApp'), AuthModule],
})

export class AppModule {}
