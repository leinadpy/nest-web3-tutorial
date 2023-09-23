import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { Web3Module } from '../web3/web3.module';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  imports: [Web3Module],
})
export class AddressModule {}
