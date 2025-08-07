/*
 * VaultFactory contract event handlers
 */
import {
  VaultFactory,
} from "generated";

// Reference: orderbook-subgraph/src/vaultFactory.ts
VaultFactory.VaultCreated.contractRegister(({ event, context }) => {
  context.addVault(event.params.vault);
});

// Reference: orderbook-subgraph/src/vaultFactory.ts
VaultFactory.VaultCreated.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vaultFactory.ts - handleVaultCreated
}); 