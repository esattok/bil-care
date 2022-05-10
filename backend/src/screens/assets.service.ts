import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private assetsRepository: Repository<Asset>,
  ) {}

  create(asset: Asset) {
    asset.createdAt = new Date();
    return this.assetsRepository.save(asset);
  }

  findAll(): Promise<Asset[]> {
    return this.assetsRepository.find();
  }

  findOne(id: number): Promise<Asset> {
    return this.assetsRepository.findOne(id);
  }

  update(id: number, asset: Asset) {
    return this.assetsRepository.update(id, asset);
  }

  remove(id: number) {
    return this.assetsRepository.delete(id);
  }
}
