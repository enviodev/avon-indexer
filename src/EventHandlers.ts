/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  OrderBook,
  OrderBook_BorrowOrderCanceled,
  OrderBook_BorrowOrderPlaced,
  OrderBook_OrderCanceled,
  OrderBook_OrderInserted,
  OrderBook_OrderMatched,
  OrderBook_OwnershipTransferStarted,
  OrderBook_OwnershipTransferred,
  OrderBook_Paused,
  OrderBook_PoolWhitelisted,
  OrderBook_Unpaused,
  OrderbookFactory,
  OrderbookFactory_OrderbookCreated,
  Pool,
  Pool_AccrueInterest,
  Pool_Approval,
  Pool_Borrow,
  Pool_Deposit,
  Pool_DepositCollateral,
  Pool_FlashLoan,
  Pool_Liquidate,
  Pool_Repay,
  Pool_Transfer,
  Pool_Withdraw,
  Pool_WithdrawCollateral,
  PoolFactory,
  PoolFactory_PoolCreated,
  Vault,
  Vault_Deposit,
  Vault_Transfer,
  Vault_Withdraw,
  VaultFactory,
  VaultFactory_VaultCreated,
} from "generated";

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.BorrowOrderCanceled.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleBorrowOrderCancelled
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.BorrowOrderPlaced.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleBorrowOrderPlaced
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.OrderCanceled.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleOrderCanceled
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.OrderInserted.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleOrderInserted
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.OrderMatched.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleOrderMatched
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.OwnershipTransferStarted.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleOwnershipTransferStarted
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.OwnershipTransferred.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleOwnershipTransferred
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.Paused.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handlePaused
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.PoolWhitelisted.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handlePoolWhitelisted
});

// Reference: orderbook-subgraph/src/orderbook.ts
OrderBook.Unpaused.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbook.ts - handleUnpaused
});

// Reference: orderbook-subgraph/src/orderbookFactory.ts
OrderbookFactory.OrderbookCreated.contractRegister(({ event, context }) => {
  context.addOrderBook(event.params.orderbook);
});

// Reference: orderbook-subgraph/src/orderbookFactory.ts
OrderbookFactory.OrderbookCreated.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbookFactory.ts - handleOrderbookCreated
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.AccrueInterest.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleAccrueInterest
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.Approval.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleApproval
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

// Reference: orderbook-subgraph/src/pool.ts
Pool.FlashLoan.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleFlashLoan
});

// Reference: orderbook-subgraph/src/pool.ts
Pool.Liquidate.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/pool.ts - handleLiquidate
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

// Reference: orderbook-subgraph/src/poolFactory.ts
PoolFactory.PoolCreated.contractRegister(({ event, context }) => {
  context.addPool(event.params.pool);
});

// Reference: orderbook-subgraph/src/poolFactory.ts
PoolFactory.PoolCreated.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/poolFactory.ts - handlePoolCreated
});

// Reference: orderbook-subgraph/src/vault.ts
Vault.Deposit.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vault.ts - handleDeposit
});

// Reference: orderbook-subgraph/src/vault.ts
Vault.Transfer.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vault.ts - handleTransfer
});

// Reference: orderbook-subgraph/src/vault.ts
Vault.Withdraw.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vault.ts - handleWithdraw
});

// Reference: orderbook-subgraph/src/vaultFactory.ts
VaultFactory.VaultCreated.contractRegister(({ event, context }) => {
  context.addVault(event.params.vault);
});

// Reference: orderbook-subgraph/src/vaultFactory.ts
VaultFactory.VaultCreated.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/vaultFactory.ts - handleVaultCreated
});
