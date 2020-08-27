import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Code } from '../shemas/code.schema'

const nameOfCollection = 'codes';

@Injectable()
export class CodeService {
  constructor(@InjectModel(nameOfCollection) private codeModel: Model<Code>) {}

  async createModelMongoCode(code: string): Promise<Code> {
    const createdCode = new this.codeModel(code);
    console.log(code)
    return createdCode.save();
  }
}
