/*
 * Vault contract event handlers
 */
import { indexer, Approval, OwnershipTransferred, Transfer, OwnershipTransferStarted } from "envio";

// Reference: orderbook-subgraph/src/vault.ts - handleApproval
indexer.onEvent(
  { contract: "Vault", event: "Approval" },
  async ({ event, context }) => {
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
}
);

// Reference: orderbook-subgraph/src/vault.ts - handleOwnershipTransferred
indexer.onEvent(
  { contract: "Vault", event: "OwnershipTransferred" },
  async ({ event, context }) => {
  const entity: OwnershipTransferred = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.OwnershipTransferred.set(entity);
}
);

// Reference: orderbook-subgraph/src/vault.ts - handleTransfer
indexer.onEvent(
  { contract: "Vault", event: "Transfer" },
  async ({ event, context }) => {
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
}
);

// Reference: orderbook-subgraph/src/vault.ts
indexer.onEvent(
  { contract: "Vault", event: "Deposit" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vault.ts - handleDeposit
}
);

// Reference: orderbook-subgraph/src/vault.ts
indexer.onEvent(
  { contract: "Vault", event: "Withdraw" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vault.ts - handleWithdraw
}
);

// Reference: orderbook-subgraph/src/vault.ts - handleOwnershipTransferStarted
indexer.onEvent(
  { contract: "Vault", event: "OwnershipTransferStarted" },
  async ({ event, context }) => {
  const entity: OwnershipTransferStarted = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.OwnershipTransferStarted.set(entity);
}
); 