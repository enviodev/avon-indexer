/*
 * Pool contract event handlers
 */
import { indexer, Approval, FlashLoan, Liquidate, Withdraw1 } from "envio";

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "AccrueInterest" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleAccrueInterest
}
);

// Reference: orderbook-subgraph/src/pool.ts - handleApproval
indexer.onEvent(
  { contract: "Pool", event: "Approval" },
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

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "Borrow" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleBorrow
}
);

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "Deposit" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleDeposit
}
);

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "DepositCollateral" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleDepositCollateral
}
);

// Reference: orderbook-subgraph/src/pool.ts - handleFlashLoan
indexer.onEvent(
  { contract: "Pool", event: "FlashLoan" },
  async ({ event, context }) => {
  const entity: FlashLoan = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    caller: event.params.caller,
    token: event.params.token,
    assets: event.params.assets,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.FlashLoan.set(entity);
}
);

// Reference: orderbook-subgraph/src/pool.ts - handleLiquidate
indexer.onEvent(
  { contract: "Pool", event: "Liquidate" },
  async ({ event, context }) => {
  const entity: Liquidate = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    pool_id: event.srcAddress,
    caller: event.params.caller,
    borrower: event.params.borrower,
    repaidAssets: event.params.repaidAssets,
    repaidShares: event.params.repaidShares,
    seizedAssets: event.params.seizedAssets,
    badDebtAssets: event.params.badDebtAssets,
    badDebtShares: event.params.badDebtShares,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Liquidate.set(entity);
}
);

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "Repay" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleRepay
}
);

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "Transfer" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleTransfer
}
);

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "Withdraw" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleWithdraw
}
);

// Reference: orderbook-subgraph/src/pool.ts - handleWithdrawPool (new Withdraw event with poolAddress)
indexer.onEvent(
  { contract: "Pool", event: "WithdrawPool" },
  async ({ event, context }) => {
  const entity: Withdraw1 = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    sender: event.params.caller,
    receiver: event.params.receiver,
    owner: event.params.receiver,
    assets: event.params.assets,
    shares: event.params.shares,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Withdraw1.set(entity);
}
);

// Reference: orderbook-subgraph/src/pool.ts
indexer.onEvent(
  { contract: "Pool", event: "WithdrawCollateral" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleWithdrawCollateral
}
); 