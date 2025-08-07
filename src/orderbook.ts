/*
 * OrderBook contract event handlers
 */
import {
  OrderBook,
  BorrowOrderCancelled,
  BorrowOrderPlaced,
  OrderCanceled,
  OrderInserted,
  OrderMatched,
  OwnershipTransferStarted,
  OwnershipTransferred,
  Paused,
  Unpaused,
} from "generated";

// Reference: orderbook-subgraph/src/orderbook.ts - handleBorrowOrderCancelled
OrderBook.BorrowOrderCanceled.handler(async ({ event, context }) => {
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
});

// Reference: orderbook-subgraph/src/orderbook.ts - handleBorrowOrderPlaced
OrderBook.BorrowOrderPlaced.handler(async ({ event, context }) => {
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
});

// Reference: orderbook-subgraph/src/orderbook.ts - handleOrderCanceled
OrderBook.OrderCanceled.handler(async ({ event, context }) => {
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
});

// Reference: orderbook-subgraph/src/orderbook.ts - handleOrderInserted
OrderBook.OrderInserted.handler(async ({ event, context }) => {
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
});

// Reference: orderbook-subgraph/src/orderbook.ts - handleOrderMatched
OrderBook.OrderMatched.handler(async ({ event, context }) => {
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
});

// Reference: orderbook-subgraph/src/orderbook.ts - handleOwnershipTransferStarted
OrderBook.OwnershipTransferStarted.handler(async ({ event, context }) => {
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

// Reference: orderbook-subgraph/src/orderbook.ts - handleOwnershipTransferred
OrderBook.OwnershipTransferred.handler(async ({ event, context }) => {
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

// Reference: orderbook-subgraph/src/orderbook.ts - handlePaused
OrderBook.Paused.handler(async ({ event, context }) => {
  const entity: Paused = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    account: event.params.account,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Paused.set(entity);
});

// Reference: orderbook-subgraph/src/orderbook.ts - handlePoolWhitelisted
OrderBook.PoolWhitelisted.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handlePoolWhitelisted
});

// Reference: orderbook-subgraph/src/orderbook.ts - handleUnpaused
OrderBook.Unpaused.handler(async ({ event, context }) => {
  const entity: Unpaused = {
    id: `${event.chainId}_${event.transaction.hash}_${event.logIndex}`,
    account: event.params.account,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
  };

  context.Unpaused.set(entity);
}); 