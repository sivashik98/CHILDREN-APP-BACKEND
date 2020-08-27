import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../shemas/user.schema'

const nameOfCollection = 'users';

@Injectable()
export class UserService {
  constructor(@InjectModel(nameOfCollection) private userModel: Model<User>) {}

  async createModelMongoUser(user): Promise<User> {
    const createdParent = new this.userModel(user);
    // console.log(user)
    return createdParent.save();
  }
}
