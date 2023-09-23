import { Module } from '@nestjs/common';
import { AddressModule } from './address/address.module';
import { BlockModule } from './block/block.module';
import { TransactionModule } from './transaction/transaction.module';
import { Web3Module } from './web3/web3.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BigIntSerializationInterceptor } from './common/bigint-serialization.interceptor';

@Module({
  imports: [
    AddressModule,
    BlockModule,
    TransactionModule,
    Web3Module,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntSerializationInterceptor,
    },
  ],
})
export class AppModule {}
