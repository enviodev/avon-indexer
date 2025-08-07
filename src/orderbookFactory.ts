/*
 * OrderbookFactory contract event handlers
 */
import {
  OrderbookFactory,
  OrderbookCreated,
  Token,
} from "generated";
import { getTokenMetadata } from "./utils/contractHelpers";
import { ZERO_BD, MULTICALL_ERC20 } from "./utils/constants";

// Reference: orderbook-subgraph/src/orderbookFactory.ts
OrderbookFactory.OrderbookCreated.contractRegister(({ event, context }) => {
  context.addOrderBook(event.params.orderbook);
});

// Reference: orderbook-subgraph/src/orderbookFactory.ts - handleOrderbookCreated
OrderbookFactory.OrderbookCreated.handler(async ({ event, context }) => {
  try {
    // Skip specific orderbook addresses (from original subgraph)
    const orderbookAddress = event.params.orderbook.toLowerCase();
    if (
      orderbookAddress === "0x3935d184298cc7c765417c46f7d211202f7141a1" ||
      orderbookAddress === "0x8536cf9fec2a040a2f6f96155e4e4a772576c2c9"
    ) {
      context.log.info(`Skip datasource from wrong param ob ${orderbookAddress}`);
      return;
    }

    context.log.info(`handleOrderbookCreated ${orderbookAddress}`);

    // Create OrderbookCreated entity with correct ID (from original subgraph)
    const entity: OrderbookCreated = {
      id: event.params.orderbook, // Use orderbook address as ID like original subgraph
      loanToken: event.params.loanToken,
      collateralToken: event.params.collateralToken,
      orderbook: event.params.orderbook,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
    };

    context.OrderbookCreated.set(entity);

    // Get or create loan token entity
    let loanToken = await context.Token.get(event.params.loanToken);
    if (!loanToken) {
      try {
        const loanTokenMetadata = await getTokenMetadata(event.params.loanToken);
        
        context.log.info(
          `ORDERBOOK CREATED :: FOR LOAN TOKEN ADDRESS:${event.params.loanToken} NAME:${loanTokenMetadata.name} SYMBOL:${loanTokenMetadata.symbol} DECIMALS:${loanTokenMetadata.decimals}`
        );

        const newLoanToken: Token = {
          id: event.params.loanToken,
          name: loanTokenMetadata.name,
          symbol: loanTokenMetadata.symbol,
          decimals: BigInt(loanTokenMetadata.decimals),
          rate: ZERO_BD as any,
          dataFeedId: event.params.loanToken,
          updatedAt: BigInt(event.block.timestamp),
          blockNumber: BigInt(event.block.number),
          blockTimestamp: BigInt(event.block.timestamp),
          transactionHash: event.transaction.hash,
          address: event.params.loanToken,
        };
        context.Token.set(newLoanToken);
      } catch (error) {
        context.log.error(`Error fetching loan token metadata for ${event.params.loanToken}: ${error}`);
      }
    }

    // Get or create collateral token entity
    let collateralToken = await context.Token.get(event.params.collateralToken);
    if (!collateralToken) {
      try {
        const collateralTokenMetadata = await getTokenMetadata(event.params.collateralToken);
        
        context.log.info(
          `ORDERBOOK CREATED :: FOR COLLATERAL TOKEN ADDRESS:${event.params.collateralToken} NAME:${collateralTokenMetadata.name} SYMBOL:${collateralTokenMetadata.symbol} DECIMALS:${collateralTokenMetadata.decimals}`
        );

        const newCollateralToken: Token = {
          id: event.params.collateralToken,
          name: collateralTokenMetadata.name,
          symbol: collateralTokenMetadata.symbol,
          decimals: BigInt(collateralTokenMetadata.decimals),
          rate: ZERO_BD as any,
          dataFeedId: event.params.collateralToken,
          updatedAt: BigInt(event.block.timestamp),
          blockNumber: BigInt(event.block.number),
          blockTimestamp: BigInt(event.block.timestamp),
          transactionHash: event.transaction.hash,
          address: event.params.collateralToken,
        };
        context.Token.set(newCollateralToken);
      } catch (error) {
        context.log.error(`Error fetching collateral token metadata for ${event.params.collateralToken}: ${error}`);
      }
    }

  } catch (error) {
    context.log.error(`Error in OrderbookCreated handler: ${error}`);
    // Don't throw - let the indexer continue
  }
}); 