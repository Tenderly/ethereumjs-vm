[@ethereumjs/tx](../README.md) › ["validate"](../modules/_validate_.md) › [Validate](_validate_.validate.md)

# Class: Validate

## Hierarchy

* **Validate**

## Index

### Methods

* [isBuffer](_validate_.validate.md#static-isbuffer)
* [isBufferOfLength](_validate_.validate.md#static-isbufferoflength)
* [isBufferOfLengthOrEmpty](_validate_.validate.md#static-isbufferoflengthorempty)
* [isBufferOfLengthOrLess](_validate_.validate.md#static-isbufferoflengthorless)
* [txV](_validate_.validate.md#static-txv)

## Methods

### `Static` isBuffer

▸ **isBuffer**(`value`: any): *void*

*Defined in [validate.ts:5](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/validate.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *void*

___

### `Static` isBufferOfLength

▸ **isBufferOfLength**(`value`: any, `length`: number): *void*

*Defined in [validate.ts:30](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/validate.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`length` | number |

**Returns:** *void*

___

### `Static` isBufferOfLengthOrEmpty

▸ **isBufferOfLengthOrEmpty**(`value`: any, `length`: number): *void*

*Defined in [validate.ts:21](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/validate.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`length` | number |

**Returns:** *void*

___

### `Static` isBufferOfLengthOrLess

▸ **isBufferOfLengthOrLess**(`value`: any, `length`: number): *void*

*Defined in [validate.ts:12](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/validate.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`length` | number |

**Returns:** *void*

___

### `Static` txV

▸ **txV**(`tx`: [Transaction](_index_.transaction.md), `v?`: Buffer): *void*

*Defined in [validate.ts:42](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/validate.ts#L42)*

Validates tx's `v` value

**Parameters:**

Name | Type |
------ | ------ |
`tx` | [Transaction](_index_.transaction.md) |
`v?` | Buffer |

**Returns:** *void*
