/*
 * PoolFactory contract event handlers
 */
import {
  PoolFactory,
} from "generated";

// Reference: orderbook-subgraph/src/poolFactory.ts
PoolFactory.PoolCreated.contractRegister(({ event, context }) => {
  context.addPool(event.params.pool);
});

// Reference: orderbook-subgraph/src/poolFactory.ts
PoolFactory.PoolCreated.handler(async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/poolFactory.ts - handlePoolCreated
}); 