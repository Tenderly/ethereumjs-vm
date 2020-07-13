[@ethereumjs/tx](../README.md) › ["index"](../modules/_index_.md) › [Transaction](_index_.transaction.md)

# Class: Transaction

An Ethereum transaction.

## Hierarchy

* **Transaction**

## Index

### Constructors

* [constructor](_index_.transaction.md#constructor)

### Accessors

* [data](_index_.transaction.md#data)
* [gasLimit](_index_.transaction.md#gaslimit)
* [gasPrice](_index_.transaction.md#gasprice)
* [nonce](_index_.transaction.md#nonce)
* [r](_index_.transaction.md#r)
* [s](_index_.transaction.md#s)
* [to](_index_.transaction.md#to)
* [v](_index_.transaction.md#v)
* [value](_index_.transaction.md#value)

### Methods

* [getBaseFee](_index_.transaction.md#getbasefee)
* [getChainId](_index_.transaction.md#getchainid)
* [getDataFee](_index_.transaction.md#getdatafee)
* [getMessageToSign](_index_.transaction.md#getmessagetosign)
* [getMessageToVerifySignature](_index_.transaction.md#getmessagetoverifysignature)
* [getSenderAddress](_index_.transaction.md#getsenderaddress)
* [getSenderPublicKey](_index_.transaction.md#getsenderpublickey)
* [getUpfrontCost](_index_.transaction.md#getupfrontcost)
* [hash](_index_.transaction.md#hash)
* [isSigned](_index_.transaction.md#issigned)
* [serialize](_index_.transaction.md#serialize)
* [sign](_index_.transaction.md#sign)
* [toCreationAddress](_index_.transaction.md#tocreationaddress)
* [toJSON](_index_.transaction.md#tojson)
* [validate](_index_.transaction.md#validate)
* [verifySignature](_index_.transaction.md#verifysignature)
* [fromRlpSerializedTx](_index_.transaction.md#static-fromrlpserializedtx)
* [fromTxData](_index_.transaction.md#static-fromtxdata)
* [fromValuesArray](_index_.transaction.md#static-fromvaluesarray)

## Constructors

###  constructor

\+ **new Transaction**(`values`: [TxValues](../interfaces/_index_.txvalues.md), `opts`: [TxOptions](../interfaces/_index_.txoptions.md)): *[Transaction](_index_.transaction.md)*

*Defined in [transaction.ts:82](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L82)*

Creates a new transaction from an object with its fields' values.

**`note`** Transaction objects implement EIP155 by default. To disable it, use the constructor's second parameter to set a chain and hardfork before EIP155 activation (i.e. before Spurious Dragon.)

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`values` | [TxValues](../interfaces/_index_.txvalues.md) | - | An object with a buffer for each of the transaction's fields. |
`opts` | [TxOptions](../interfaces/_index_.txoptions.md) | {} | The transaction's options, used to indicate the chain and hardfork the transactions belongs to. |

**Returns:** *[Transaction](_index_.transaction.md)*

## Accessors

###  data

• **get data**(): *Buffer*

*Defined in [transaction.ts:357](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L357)*

**Returns:** *Buffer*

• **set data**(`value`: Buffer): *void*

*Defined in [transaction.ts:361](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  gasLimit

• **get gasLimit**(): *Buffer*

*Defined in [transaction.ts:330](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L330)*

**Returns:** *Buffer*

• **set gasLimit**(`value`: Buffer): *void*

*Defined in [transaction.ts:334](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L334)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  gasPrice

• **get gasPrice**(): *Buffer*

*Defined in [transaction.ts:321](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L321)*

**Returns:** *Buffer*

• **set gasPrice**(`value`: Buffer): *void*

*Defined in [transaction.ts:325](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L325)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  nonce

• **get nonce**(): *Buffer*

*Defined in [transaction.ts:312](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L312)*

**Returns:** *Buffer*

• **set nonce**(`value`: Buffer): *void*

*Defined in [transaction.ts:316](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L316)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  r

• **get r**(): *Buffer*

*Defined in [transaction.ts:376](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L376)*

**Returns:** *Buffer*

• **set r**(`value`: Buffer): *void*

*Defined in [transaction.ts:380](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L380)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  s

• **get s**(): *Buffer*

*Defined in [transaction.ts:385](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L385)*

**Returns:** *Buffer*

• **set s**(`value`: Buffer): *void*

*Defined in [transaction.ts:389](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L389)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  to

• **get to**(): *Buffer*

*Defined in [transaction.ts:339](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L339)*

**Returns:** *Buffer*

• **set to**(`value`: Buffer): *void*

*Defined in [transaction.ts:343](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L343)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  v

• **get v**(): *Buffer*

*Defined in [transaction.ts:366](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L366)*

**Returns:** *Buffer*

• **set v**(`value`: Buffer): *void*

*Defined in [transaction.ts:370](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L370)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

___

###  value

• **get value**(): *Buffer*

*Defined in [transaction.ts:348](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L348)*

**Returns:** *Buffer*

• **set value**(`value`: Buffer): *void*

*Defined in [transaction.ts:352](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L352)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

## Methods

###  getBaseFee

▸ **getBaseFee**(): *BN*

*Defined in [transaction.ts:237](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L237)*

the minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)

**Returns:** *BN*

___

###  getChainId

▸ **getChainId**(): *number*

*Defined in [transaction.ts:155](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L155)*

Returns chain ID

**Returns:** *number*

___

###  getDataFee

▸ **getDataFee**(): *BN*

*Defined in [transaction.ts:224](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L224)*

The amount of gas paid for the data in this tx

**Returns:** *BN*

___

###  getMessageToSign

▸ **getMessageToSign**(): *Buffer‹›*

*Defined in [transaction.ts:144](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L144)*

**Returns:** *Buffer‹›*

___

###  getMessageToVerifySignature

▸ **getMessageToVerifySignature**(): *Buffer‹›*

*Defined in [transaction.ts:148](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L148)*

**Returns:** *Buffer‹›*

___

###  getSenderAddress

▸ **getSenderAddress**(): *Buffer*

*Defined in [transaction.ts:162](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L162)*

Returns the sender's address

**Returns:** *Buffer*

___

###  getSenderPublicKey

▸ **getSenderPublicKey**(): *Buffer*

*Defined in [transaction.ts:169](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L169)*

Returns the public key of the sender

**Returns:** *Buffer*

___

###  getUpfrontCost

▸ **getUpfrontCost**(): *BN*

*Defined in [transaction.ts:248](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L248)*

the up front amount that an account must have for this transaction to be valid

**Returns:** *BN*

___

###  hash

▸ **hash**(): *Buffer*

*Defined in [transaction.ts:128](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L128)*

Computes a sha3-256 hash of the serialized tx

**Returns:** *Buffer*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Defined in [transaction.ts:308](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L308)*

**Returns:** *boolean*

___

###  serialize

▸ **serialize**(): *Buffer*

*Defined in [transaction.ts:278](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L278)*

Returns the rlp encoding of the transaction

**Returns:** *Buffer*

___

###  sign

▸ **sign**(`privateKey`: Buffer): *void*

*Defined in [transaction.ts:208](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L208)*

sign a transaction with a given private key

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | Buffer | Must be 32 bytes in length  |

**Returns:** *void*

___

###  toCreationAddress

▸ **toCreationAddress**(): *boolean*

*Defined in [transaction.ts:121](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L121)*

If the tx's `to` is to the creation address

**Returns:** *boolean*

___

###  toJSON

▸ **toJSON**(): *object*

*Defined in [transaction.ts:294](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L294)*

**Returns:** *object*

___

###  validate

▸ **validate**(): *boolean*

*Defined in [transaction.ts:255](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L255)*

Validates the signature and checks to see if it has enough gas.

**Returns:** *boolean*

▸ **validate**(`stringError`: false): *boolean*

*Defined in [transaction.ts:256](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L256)*

**Parameters:**

Name | Type |
------ | ------ |
`stringError` | false |

**Returns:** *boolean*

▸ **validate**(`stringError`: true): *string*

*Defined in [transaction.ts:257](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L257)*

**Parameters:**

Name | Type |
------ | ------ |
`stringError` | true |

**Returns:** *string*

___

###  verifySignature

▸ **verifySignature**(): *boolean*

*Defined in [transaction.ts:196](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L196)*

Determines if the signature is valid

**Returns:** *boolean*

___

### `Static` fromRlpSerializedTx

▸ **fromRlpSerializedTx**(`serialized`: Buffer, `opts`: [TxOptions](../interfaces/_index_.txoptions.md)): *[Transaction](_index_.transaction.md)‹›*

*Defined in [transaction.ts:54](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`serialized` | Buffer | - |
`opts` | [TxOptions](../interfaces/_index_.txoptions.md) | {} |

**Returns:** *[Transaction](_index_.transaction.md)‹›*

___

### `Static` fromTxData

▸ **fromTxData**(`txData`: [TxData](../interfaces/_index_.txdata.md), `opts`: [TxOptions](../interfaces/_index_.txoptions.md)): *[Transaction](_index_.transaction.md)‹›*

*Defined in [transaction.ts:37](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txData` | [TxData](../interfaces/_index_.txdata.md) | - |
`opts` | [TxOptions](../interfaces/_index_.txoptions.md) | {} |

**Returns:** *[Transaction](_index_.transaction.md)‹›*

___

### `Static` fromValuesArray

▸ **fromValuesArray**(`values`: Buffer[], `opts`: [TxOptions](../interfaces/_index_.txoptions.md)): *[Transaction](_index_.transaction.md)‹›*

*Defined in [transaction.ts:63](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/tx/src/transaction.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | Buffer[] | - |
`opts` | [TxOptions](../interfaces/_index_.txoptions.md) | {} |

**Returns:** *[Transaction](_index_.transaction.md)‹›*
