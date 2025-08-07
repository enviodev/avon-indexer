/*
 * OrderbookFactory contract event handlers
 */
import {
  OrderbookFactory,
} from "generated";

// Reference: orderbook-subgraph/src/orderbookFactory.ts
OrderbookFactory.OrderbookCreated.contractRegister(({ event, context }) => {
  context.addOrderBook(event.params.orderbook);
});

// Reference: orderbook-subgraph/src/orderbookFactory.ts
OrderbookFactory.OrderbookCreated.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/orderbookFactory.ts - handleOrderbookCreated
}); 