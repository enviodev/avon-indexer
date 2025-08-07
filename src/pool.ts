/*
 * Pool contract event handlers
 */
import {
  Pool,
  Approval,
  FlashLoan,
  Liquidate,
} from "generated";

// Reference: orderbook-subgraph/src/pool.ts
Pool.AccrueInterest.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleAccrueInterest
});

// Reference: orderbook-subgraph/src/pool.ts - handleApproval
Pool.Approval.handler(async ({ event, context }) => {
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

// Reference: orderbook-subgraph/src/pool.ts
Pool.Borrow.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleBorrow
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.Deposit.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleDeposit
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.DepositCollateral.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleDepositCollateral
});

// Reference: orderbook-subgraph/src/pool.ts - handleFlashLoan
Pool.FlashLoan.handler(async ({ event, context }) => {
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
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.Liquidate.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleLiquidate
});

// Reference: orderbook-subgraph/src/pool.ts - handleLiquidate
Pool.Liquidate.handler(async ({ event, context }) => {
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
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.Repay.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleRepay
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.Transfer.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleTransfer
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.Withdraw.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleWithdraw
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.WithdrawCollateral.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleWithdrawCollateral
}); 