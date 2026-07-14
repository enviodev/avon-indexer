/*
 * OrderBook contract event handlers
 */
import { indexer, BorrowOrderCancelled, BorrowOrderPlaced, OrderCanceled, OrderInserted, OrderMatched, OwnershipTransferStarted, OwnershipTransferred, Paused, Unpaused } from "envio";

// Reference: orderbook-subgraph/src/orderbook.ts - handleBorrowOrderCancelled
indexer.onEvent(
  { contract: "OrderBook", event: "BorrowOrderCanceled" },
  async ({ event, context }) => {
  const entity: BorrowOrderCancelled = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    borrower: event.params.borrower,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.BorrowOrderCancelled.set(entity);
}
);

// Reference: orderbook-subgraph/src/orderbook.ts - handleBorrowOrderPlaced
indexer.onEvent(
  { contract: "OrderBook", event: "BorrowOrderPlaced" },
  async ({ event, context }) => {
  const entity: BorrowOrderPlaced = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    borrower: event.params.borrower,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
    minAmountExpected: event.params.minAmountExpected,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.BorrowOrderPlaced.set(entity);
}
);

// Reference: orderbook-subgraph/src/orderbook.ts - handleOrderCanceled
indexer.onEvent(
  { contract: "OrderBook", event: "OrderCanceled" },
  async ({ event, context }) => {
  const entity: OrderCanceled = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    isLender: event.params.isLender,
    maker: event.params.maker,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.OrderCanceled.set(entity);
}
);

// Reference: orderbook-subgraph/src/orderbook.ts - handleOrderInserted
indexer.onEvent(
  { contract: "OrderBook", event: "OrderInserted" },
  async ({ event, context }) => {
  const entity: OrderInserted = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    isLender: event.params.isLender,
    maker: event.params.maker,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.OrderInserted.set(entity);
}
);

// Reference: orderbook-subgraph/src/orderbook.ts - handleOrderMatched
indexer.onEvent(
  { contract: "OrderBook", event: "OrderMatched" },
  async ({ event, context }) => {
  const entity: OrderMatched = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    lender: event.params.lender,
    borrower: event.params.borrower,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.OrderMatched.set(entity);
}
);

// Reference: orderbook-subgraph/src/orderbook.ts - handleOwnershipTransferStarted
indexer.onEvent(
  { contract: "OrderBook", event: "OwnershipTransferStarted" },
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

// Reference: orderbook-subgraph/src/orderbook.ts - handleOwnershipTransferred
indexer.onEvent(
  { contract: "OrderBook", event: "OwnershipTransferred" },
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

// Reference: orderbook-subgraph/src/orderbook.ts - handlePaused
indexer.onEvent(
  { contract: "OrderBook", event: "Paused" },
  async ({ event, context }) => {
  const entity: Paused = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    account: event.params.account,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Paused.set(entity);
}
);

// Reference: orderbook-subgraph/src/orderbook.ts - handlePoolWhitelisted
indexer.onEvent(
  { contract: "OrderBook", event: "PoolWhitelisted" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handlePoolWhitelisted
}
);

// Reference: orderbook-subgraph/src/orderbook.ts - handleUnpaused
indexer.onEvent(
  { contract: "OrderBook", event: "Unpaused" },
  async ({ event, context }) => {
  const entity: Unpaused = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    account: event.params.account,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Unpaused.set(entity);
}
); 