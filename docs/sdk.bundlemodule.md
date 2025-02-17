<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [BundleModule](./sdk.bundlemodule.md)

## BundleModule class

Create a collection of NFTs that lets you optionally mint multiple copies of each NFT.

<b>Signature:</b>

```typescript
export declare class BundleModule extends ModuleWithRoles<NFTBundleContract> implements ITransferable 
```
<b>Extends:</b> [ModuleWithRoles](./sdk.modulewithroles.md)<!-- -->&lt;NFTBundleContract&gt;

<b>Implements:</b> [ITransferable](./sdk.itransferable.md)

## Example


```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getBundleModule("{{module_address}}");
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [moduleType](./sdk.bundlemodule.moduletype.md) | <code>static</code> | [ModuleType](./sdk.moduletype.md) |  |
|  [roles](./sdk.bundlemodule.roles.md) | <code>static</code> | readonly \["admin", "minter", "pauser", "transfer"\] |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [balance(tokenId)](./sdk.bundlemodule.balance.md) |  |  |
|  [balanceOf(address, tokenId)](./sdk.bundlemodule.balanceof.md) |  | Get NFT Balance |
|  [burn(args)](./sdk.bundlemodule.burn.md) |  | Burn NFT |
|  [burnBatch(args)](./sdk.bundlemodule.burnbatch.md) |  |  |
|  [burnBatchFrom(account, args)](./sdk.bundlemodule.burnbatchfrom.md) |  |  |
|  [burnFrom(account, args)](./sdk.bundlemodule.burnfrom.md) |  |  |
|  [create(metadata)](./sdk.bundlemodule.create.md) |  |  |
|  [createAndMint(metadataWithSupply)](./sdk.bundlemodule.createandmint.md) |  | Mint NFT |
|  [createAndMintBatch(metadataWithSupply)](./sdk.bundlemodule.createandmintbatch.md) |  | Mint Many NFTs |
|  [createBatch(metadatas)](./sdk.bundlemodule.createbatch.md) |  |  |
|  [createWithErc20(tokenContract, tokenAmount, args)](./sdk.bundlemodule.createwitherc20.md) |  |  |
|  [createWithERC721(tokenContract, tokenId, metadata)](./sdk.bundlemodule.createwitherc721.md) |  |  |
|  [createWithNFT(tokenContract, tokenId, metadata)](./sdk.bundlemodule.createwithnft.md) |  |  |
|  [createWithToken(tokenContract, tokenAmount, args)](./sdk.bundlemodule.createwithtoken.md) |  |  |
|  [get(tokenId, address)](./sdk.bundlemodule.get.md) |  | Get a single bundle item by tokenId. |
|  [getAll(address)](./sdk.bundlemodule.getall.md) |  | Get NFT Data |
|  [getOwned(\_address)](./sdk.bundlemodule.getowned.md) |  | <code>getOwned</code> is a convenience method for getting all owned tokens for a particular wallet. |
|  [getRoyaltyBps()](./sdk.bundlemodule.getroyaltybps.md) |  | Gets the royalty BPS (basis points) of the contract |
|  [getRoyaltyRecipientAddress()](./sdk.bundlemodule.getroyaltyrecipientaddress.md) |  | Gets the address of the royalty recipient |
|  [isApproved(address, operator, assetContract, assetId)](./sdk.bundlemodule.isapproved.md) |  |  |
|  [isTransferRestricted()](./sdk.bundlemodule.istransferrestricted.md) |  |  |
|  [mint(args)](./sdk.bundlemodule.mint.md) |  |  |
|  [mintBatch(args)](./sdk.bundlemodule.mintbatch.md) |  |  |
|  [mintBatchTo(to, args, data)](./sdk.bundlemodule.mintbatchto.md) |  |  |
|  [mintTo(to, args, data)](./sdk.bundlemodule.mintto.md) |  |  |
|  [setApproval(operator, approved)](./sdk.bundlemodule.setapproval.md) |  |  |
|  [setModuleMetadata(metadata)](./sdk.bundlemodule.setmodulemetadata.md) |  |  |
|  [setRestrictedTransfer(restricted)](./sdk.bundlemodule.setrestrictedtransfer.md) |  |  |
|  [setRoyaltyBps(amount)](./sdk.bundlemodule.setroyaltybps.md) |  |  |
|  [transfer(to, tokenId, amount)](./sdk.bundlemodule.transfer.md) |  | Transfer NFT |
|  [transferBatchFrom(from, to, args, data)](./sdk.bundlemodule.transferbatchfrom.md) |  | Transfer Many NFTs |
|  [transferFrom(from, to, args, data)](./sdk.bundlemodule.transferfrom.md) |  |  |
|  [unwrapNFT(tokenId)](./sdk.bundlemodule.unwrapnft.md) |  |  |
|  [unwrapToken(tokenId, amount)](./sdk.bundlemodule.unwraptoken.md) |  |  |

