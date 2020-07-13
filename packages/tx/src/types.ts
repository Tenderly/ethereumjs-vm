import Common from '@ethereumjs/common'

/**
 * Any object that can be transformed into a `Buffer`
 */
export interface TransformableToBuffer {
  toBuffer(): Buffer
}

/**
 * A hex string prefixed with `0x`.
 */
export type PrefixedHexString = string

/**
 * A Buffer, hex string prefixed with `0x`, Number, or an object with a toBuffer method such as BN.
 */
export type BufferLike = Buffer | TransformableToBuffer | PrefixedHexString | number

/**
 * An object with an optional field with each of the transaction's values.
 * These can be represented with any BufferLike compatible type.
 */
export interface TxData {
  /**
   * The transaction's gas limit.
   */
  gasLimit?: BufferLike

  /**
   * The transaction's gas price.
   */
  gasPrice?: BufferLike

  /**
   * The transaction's the address is sent to.
   */
  to?: BufferLike

  /**
   * The transaction's nonce.
   */
  nonce?: BufferLike

  /**
   * This will contain the data of the message or the init of a contract
   */
  data?: BufferLike

  /**
   * EC recovery ID.
   */
  v?: BufferLike

  /**
   * EC signature parameter.
   */
  r?: BufferLike

  /**
   * EC signature parameter.
   */
  s?: BufferLike

  /**
   * The amount of Ether sent.
   */
  value?: BufferLike
}

/**
 * An object with all of the transaction's values represented as buffers.
 */
export interface TxValues {
  nonce: Buffer
  gasLimit: Buffer
  gasPrice: Buffer
  to: Buffer
  value: Buffer
  data: Buffer
  v: Buffer
  r: Buffer
  s: Buffer
}

/**
 * An object to set to which blockchain the blocks and their headers belong.
 * This could be specified using a Common object, or `chain` and `hardfork`.
 * Defaults to mainnet without specifying a hardfork.
 */
export interface TxOptions {
  /**
   * A Common object defining the chain and the hardfork a transaction belongs to.
   */
  common?: Common

  /**
   * The chain of the transaction, default: 'mainnet'
   */
  chain?: number | string

  /**
   * The hardfork of the transaction, default: 'petersburg'
   */
  hardfork?: string
}
