<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [Module](./sdk.module.md)

## Module class

The root Module class. All other Modules extend this.

<b>Signature:</b>

```typescript
export declare class Module<TContract extends BaseContract = BaseContract> 
```

## Remarks

This should never be instantiated directly.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Module` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [address](./sdk.module.address.md) |  | string |  |
|  [sdk](./sdk.module.sdk.md) |  | [ThirdwebSDK](./sdk.thirdwebsdk.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [exists()](./sdk.module.exists.md) |  |  |
|  [getMetadata(resolveUrls)](./sdk.module.getmetadata.md) |  | Get the metadata of the contract. |
|  [parseEventLogs(eventName, logs)](./sdk.module.parseeventlogs.md) |  |  |
|  [parseLogs(eventName, logs, contract)](./sdk.module.parselogs.md) |  |  |
|  [setMetadata(metadata)](./sdk.module.setmetadata.md) |  | Set new metadata on the contract and return it if successful. |
|  [signTypedData(signer, from, domain, types, message)](./sdk.module.signtypeddata.md) |  |  |

