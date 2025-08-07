/*
 * VaultFactory contract event handlers
 */
import {
  VaultFactory,
  VaultDataEntity,
  Token,
} from "generated";
import { getTokenMetadata } from "./utils/contractHelpers";
import { ONE_BI, ZERO_BI, ZERO_BD, ONE_BD } from "./utils/constants";

// Reference: orderbook-subgraph/src/vaultFactory.ts
VaultFactory.VaultCreated.contractRegister(({ event, context }) => {
  context.addVault(event.params.vault);
});

// Reference: orderbook-subgraph/src/vaultFactory.ts - handleVaultCreated
VaultFactory.VaultCreated.handler(async ({ event, context }) => {
  try {
    // Get or create VaultFactory entity
    let vaultFactory = await context.VaultFactory.get(ONE_BI.toString());
    if (!vaultFactory) {
      vaultFactory = {
        id: ONE_BI.toString(),
        totalVaults: ZERO_BI,
        timestamp: BigInt(event.block.timestamp),
        lastUpdate: BigInt(event.block.timestamp),
      };
    }

    // Update vault factory stats - create new object since properties are readonly
    const updatedVaultFactory = {
      ...vaultFactory,
      totalVaults: vaultFactory.totalVaults + ONE_BI,
      lastUpdate: BigInt(event.block.timestamp),
    };
    context.VaultFactory.set(updatedVaultFactory);

    // Fetch ERC20 metadata for both vault and token
    const [vaultMetadata, tokenMetadata] = await Promise.all([
      getTokenMetadata(event.params.vault), // Vault is also an ERC20 token
      getTokenMetadata(event.params.token), // Token is an ERC20 token
    ]);
    
    // Create VaultDataEntity
    const vault: VaultDataEntity = {
      id: event.params.vault,
      name: vaultMetadata.name, // Use vault's ERC20 metadata
      symbol: vaultMetadata.symbol, // Use vault's ERC20 metadata
      decimals: BigInt(vaultMetadata.decimals), // Use vault's ERC20 decimals
      manager: event.params.poolManager,
      timestamp: BigInt(event.block.timestamp),
      lastUpdate: BigInt(event.block.timestamp),
      fee: ZERO_BI,
      depositApy: ZERO_BI, // Will be calculated later
      convertToAssetsMultiplier: ZERO_BD as any, // Will be calculated later
      totalDepositsVolume: ZERO_BI,
      totalWithdrawalsVolume: ZERO_BI,
      totalAssets: ZERO_BI, // Will be updated later
      totalShares: ZERO_BI, // Will be updated later
      token_id: event.params.token,
      vaultFactory_id: ONE_BI.toString(),
    };

    // Get or create Token entity - only fetch token metadata if token doesn't exist
    let token = await context.Token.get(event.params.token);
    
    if (!token) {
      // Only fetch token metadata when token doesn't exist (optimization)
      token = {
        id: event.params.token,
        name: tokenMetadata.name,
        symbol: tokenMetadata.symbol,
        decimals: BigInt(tokenMetadata.decimals),
        rate: ZERO_BD as any,
        dataFeedId: event.params.token,
        updatedAt: BigInt(event.block.timestamp),
        blockNumber: BigInt(event.block.number),
        blockTimestamp: BigInt(event.block.timestamp),
        transactionHash: event.transaction.hash,
        address: event.params.token,
      };
      context.Token.set(token);
    }

    // Calculate convertToAssetsMultiplier (simplified for now)
    let convertToAssetsMultiplier = ONE_BD as any;
    // In a real implementation, you would calculate this based on vault state
    // For now, use ONE_BD to match the original subgraph logic

    // Update vault with calculated values - create new object since properties are readonly
    const updatedVault: VaultDataEntity = {
      ...vault,
      convertToAssetsMultiplier,
    };

    context.VaultDataEntity.set(updatedVault);

  } catch (error) {
    console.error(`Error in VaultCreated handler: ${error}`);
    // Don't throw - let the indexer continue
  }
}); 