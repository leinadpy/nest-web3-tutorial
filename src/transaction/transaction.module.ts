import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { Web3Module } from '../web3/web3.module';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  imports: [Web3Module],
})
export class TransactionModule {}
