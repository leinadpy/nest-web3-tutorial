import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import Web3Utils from '../web3/web3-utils';

@Injectable()
export class AddressValidationPipe implements PipeTransform {
  transform(address: string) {
    if (!Web3Utils.isValidAddress(address)) {
      throw new BadRequestException('Invalid address');
    }
    return address;
  }
}
