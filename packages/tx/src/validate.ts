import Transaction from './transaction'
import { bufferToInt } from 'ethereumjs-util'

export default class Validate {
  static isBuffer(value: any) {
    // This is here for JS users
    if (!(value instanceof Buffer)) {
      throw new Error("Value should be a buffer. Please, see ethereumjs-util's toBuffer function")
    }
  }

  static isBufferOfLengthOrLess(value: any, length: number) {
    this.isBuffer(value)
    const buffer = value as Buffer

    if (buffer.length > length) {
      throw new Error(`Value shouldn't have more than ${length} bytes`)
    }
  }

  static isBufferOfLengthOrEmpty(value: any, length: number) {
    this.isBuffer(value)
    const buffer = value as Buffer

    if (buffer.length !== length && buffer.length !== 0) {
      throw new Error(`Value shouldn't have ${length} bytes or be empty`)
    }
  }

  static isBufferOfLength(value: any, length: number) {
    this.isBuffer(value)
    const buffer = value as Buffer

    if (buffer.length !== length) {
      throw new Error(`Value shouldn't have ${length} bytes`)
    }
  }

  /**
   * Validates tx's `v` value
   */
  static txV(tx: Transaction, v?: Buffer): void {
    if (v === undefined || v.length === 0) {
      return
    }

    if (!(<any>tx)._common.gteHardfork('spuriousDragon')) {
      return
    }

    const vInt = bufferToInt(v)

    if (vInt === 27 || vInt === 28) {
      return
    }

    const isValidEIP155V = vInt === tx.getChainId() * 2 + 35 || vInt === tx.getChainId() * 2 + 36

    if (!isValidEIP155V) {
      throw new Error(
        `Incompatible EIP155-based V ${vInt} and chain id ${tx.getChainId()}. See the second parameter of the Transaction constructor to set the chain id.`,
      )
    }
  }
}
