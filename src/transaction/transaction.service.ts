import { Injectable } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';
import { Transaction } from 'web3';
@Injectable()
export class TransactionService {
  constructor(private web3Service: Web3Service) {}

  async getTransaction(transactionHash: string): Promise<Transaction> {
    console.log('Buscando en Web3...');
    const transaction = await this.web3Service.getTransaction(transactionHash);

    return transaction;
  }
}
