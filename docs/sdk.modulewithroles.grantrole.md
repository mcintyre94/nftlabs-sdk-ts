<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [ModuleWithRoles](./sdk.modulewithroles.md) &gt; [grantRole](./sdk.modulewithroles.grantrole.md)

## ModuleWithRoles.grantRole() method

Call this to grant a role to a specific address.

<b>Signature:</b>

```typescript
grantRole(role: Role, address: string): Promise<TransactionReceipt>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  role | [Role](./sdk.role.md) | The [role](./sdk.iroles.md) to grant to the address |
|  address | string | The address to grant the role to |

<b>Returns:</b>

Promise&lt;TransactionReceipt&gt;

The transaction receipt

## Exceptions

If you are trying to grant does not exist on the module this will throw an [InvariantError](./sdk.invarianterror.md)<!-- -->.

## Remarks

Make sure you are sure you want to grant the role to the address.

