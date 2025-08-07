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

OrderBook.BorrowOrderCanceled.handler(async ({ event, context }) => {
  const entity: OrderBook_BorrowOrderCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    borrower: event.params.borrower,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
  };

  context.OrderBook_BorrowOrderCanceled.set(entity);
});

OrderBook.BorrowOrderPlaced.handler(async ({ event, context }) => {
  const entity: OrderBook_BorrowOrderPlaced = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    borrower: event.params.borrower,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
    minAmountExpected: event.params.minAmountExpected,
  };

  context.OrderBook_BorrowOrderPlaced.set(entity);
});

OrderBook.OrderCanceled.handler(async ({ event, context }) => {
  const entity: OrderBook_OrderCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    isLender: event.params.isLender,
    maker: event.params.maker,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
  };

  context.OrderBook_OrderCanceled.set(entity);
});

OrderBook.OrderInserted.handler(async ({ event, context }) => {
  const entity: OrderBook_OrderInserted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    isLender: event.params.isLender,
    maker: event.params.maker,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
  };

  context.OrderBook_OrderInserted.set(entity);
});

OrderBook.OrderMatched.handler(async ({ event, context }) => {
  const entity: OrderBook_OrderMatched = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lender: event.params.lender,
    borrower: event.params.borrower,
    rate: event.params.rate,
    ltv: event.params.ltv,
    amount: event.params.amount,
  };

  context.OrderBook_OrderMatched.set(entity);
});

OrderBook.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: OrderBook_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.OrderBook_OwnershipTransferStarted.set(entity);
});

OrderBook.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: OrderBook_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.OrderBook_OwnershipTransferred.set(entity);
});

OrderBook.Paused.handler(async ({ event, context }) => {
  const entity: OrderBook_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.OrderBook_Paused.set(entity);
});

OrderBook.PoolWhitelisted.handler(async ({ event, context }) => {
  const entity: OrderBook_PoolWhitelisted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pool: event.params.pool,
  };

  context.OrderBook_PoolWhitelisted.set(entity);
});

OrderBook.Unpaused.handler(async ({ event, context }) => {
  const entity: OrderBook_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.OrderBook_Unpaused.set(entity);
});

OrderbookFactory.OrderbookCreated.contractRegister(({ event, context }) => {
  context.addOrderBook(event.params.orderbook);
});

OrderbookFactory.OrderbookCreated.handler(async ({ event, context }) => {
  
  
  const entity: OrderbookFactory_OrderbookCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    loanToken: event.params.loanToken,
    collateralToken: event.params.collateralToken,
    orderbook: event.params.orderbook,
  };

  context.OrderbookFactory_OrderbookCreated.set(entity);
});

Pool.AccrueInterest.handler(async ({ event, context }) => {
  const entity: Pool_AccrueInterest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolAddress: event.params.poolAddress,
    prevBorrowRate: event.params.prevBorrowRate,
    interest: event.params.interest,
    feeShares: event.params.feeShares,
  };

  context.Pool_AccrueInterest.set(entity);
});

Pool.Approval.handler(async ({ event, context }) => {
  const entity: Pool_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Pool_Approval.set(entity);
});

Pool.Borrow.handler(async ({ event, context }) => {
  const entity: Pool_Borrow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolAddress: event.params.poolAddress,
    caller: event.params.caller,
    onBehalf: event.params.onBehalf,
    receiver: event.params.receiver,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Pool_Borrow.set(entity);
});

Pool.Deposit.handler(async ({ event, context }) => {
  const entity: Pool_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Pool_Deposit.set(entity);
});

Pool.DepositCollateral.handler(async ({ event, context }) => {
  const entity: Pool_DepositCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolAddress: event.params.poolAddress,
    caller: event.params.caller,
    onBehalf: event.params.onBehalf,
    assets: event.params.assets,
  };

  context.Pool_DepositCollateral.set(entity);
});

Pool.FlashLoan.handler(async ({ event, context }) => {
  const entity: Pool_FlashLoan = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    token: event.params.token,
    assets: event.params.assets,
  };

  context.Pool_FlashLoan.set(entity);
});

Pool.Liquidate.handler(async ({ event, context }) => {
  const entity: Pool_Liquidate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolAddress: event.params.poolAddress,
    caller: event.params.caller,
    borrower: event.params.borrower,
    repaidAssets: event.params.repaidAssets,
    repaidShares: event.params.repaidShares,
    seizedAssets: event.params.seizedAssets,
    badDebtAssets: event.params.badDebtAssets,
    badDebtShares: event.params.badDebtShares,
  };

  context.Pool_Liquidate.set(entity);
});

Pool.Repay.handler(async ({ event, context }) => {
  const entity: Pool_Repay = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolAddress: event.params.poolAddress,
    caller: event.params.caller,
    onBehalf: event.params.onBehalf,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Pool_Repay.set(entity);
});

Pool.Transfer.handler(async ({ event, context }) => {
  const entity: Pool_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Pool_Transfer.set(entity);
});

Pool.Withdraw.handler(async ({ event, context }) => {
  const entity: Pool_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Pool_Withdraw.set(entity);
});

Pool.WithdrawCollateral.handler(async ({ event, context }) => {
  const entity: Pool_WithdrawCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolAddress: event.params.poolAddress,
    caller: event.params.caller,
    onBehalf: event.params.onBehalf,
    receiver: event.params.receiver,
    assets: event.params.assets,
  };

  context.Pool_WithdrawCollateral.set(entity);
});

PoolFactory.PoolCreated.contractRegister(({ event, context }) => {
  context.addPool(event.params.pool);
});

PoolFactory.PoolCreated.handler(async ({ event, context }) => {
  const entity: PoolFactory_PoolCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pool: event.params.pool,
    loanToken: event.params.loanToken,
    collateralToken: event.params.collateralToken,
  };

  context.PoolFactory_PoolCreated.set(entity);
});

Vault.Deposit.handler(async ({ event, context }) => {
  const entity: Vault_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Vault_Deposit.set(entity);
});

Vault.Transfer.handler(async ({ event, context }) => {
  const entity: Vault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Vault_Transfer.set(entity);
});

Vault.Withdraw.handler(async ({ event, context }) => {
  const entity: Vault_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Vault_Withdraw.set(entity);
});

VaultFactory.VaultCreated.contractRegister(({ event, context }) => {
  context.addVault(event.params.vault);
});

VaultFactory.VaultCreated.handler(async ({ event, context }) => {
  const entity: VaultFactory_VaultCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    vault: event.params.vault,
    token: event.params.token,
    poolManager: event.params.poolManager,
  };

  context.VaultFactory_VaultCreated.set(entity);
});
