import Web3Validator from 'web3-validator';

export default class Web3Utils {
  static isValidAddress(address: string): boolean {
    return Web3Validator.isAddress(address);
  }
}
