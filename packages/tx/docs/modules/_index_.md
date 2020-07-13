[@ethereumjs/tx](../README.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Classes

* [Transaction](../classes/_index_.transaction.md)

### Interfaces

* [TransformableToBuffer](../interfaces/_index_.transformabletobuffer.md)
* [TxData](../interfaces/_index_.txdata.md)
* [TxOptions](../interfaces/_index_.txoptions.md)
* [TxValues](../interfaces/_index_.txvalues.md)

### Type aliases

* [BufferLike](_index_.md#bufferlike)
* [PrefixedHexString](_index_.md#prefixedhexstring)

## Type aliases

###  BufferLike

Ƭ **BufferLike**: *Buffer | [TransformableToBuffer](../interfaces/_index_.transformabletobuffer.md) | [PrefixedHexString](_index_.md#prefixedhexstring) | number*

*Defined in [types.ts:18](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/types.ts#L18)*

A Buffer, hex string prefixed with `0x`, Number, or an object with a toBuffer method such as BN.

___

###  PrefixedHexString

Ƭ **PrefixedHexString**: *string*

*Defined in [types.ts:13](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/types.ts#L13)*

A hex string prefixed with `0x`.
