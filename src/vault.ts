/*
 * Vault contract event handlers
 */
import {
  Vault,
  Approval,
  OwnershipTransferred,
  Transfer,
  OwnershipTransferStarted,
} from "generated";

// Reference: orderbook-subgraph/src/vault.ts - handleApproval
Vault.Approval.handler(async ({ event, context }) => {
  const entity: Approval = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Approval.set(entity);
});

// Reference: orderbook-subgraph/src/vault.ts - handleOwnershipTransferred
Vault.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: OwnershipTransferred = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.OwnershipTransferred.set(entity);
});

// Reference: orderbook-subgraph/src/vault.ts - handleTransfer
Vault.Transfer.handler(async ({ event, context }) => {
  const entity: Transfer = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Transfer.set(entity);
});

// Reference: orderbook-subgraph/src/vault.ts
Vault.Deposit.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vault.ts - handleDeposit
});

// Reference: orderbook-subgraph/src/vault.ts
Vault.Withdraw.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vault.ts - handleWithdraw
});

// Reference: orderbook-subgraph/src/vault.ts - handleOwnershipTransferStarted
Vault.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: OwnershipTransferStarted = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.OwnershipTransferStarted.set(entity);
}); 