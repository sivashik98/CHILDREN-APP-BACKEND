import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pair } from '../shemas/pair.schema'

const nameOfCollection = 'pairs';

@Injectable()
export class PairService {
  constructor(@InjectModel(nameOfCollection) private pairModel: Model<Pair>) {}

  async createModelMongoPair(): Promise<Pair> {
    const createdPair = new this.pairModel();
    // console.log(user)
    return createdPair.save();
  }
}
