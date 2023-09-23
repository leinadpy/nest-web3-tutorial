import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';
import { Web3Module } from '../web3/web3.module';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
  imports: [Web3Module],
})
export class BlockModule {}
