/*
 * PoolFactory contract event handlers
 */
import { indexer } from "envio";

// Reference: orderbook-subgraph/src/poolFactory.ts
indexer.contractRegister(
  { contract: "PoolFactory", event: "PoolCreated" },
  ({ event, context }) => {
  context.chain.Pool.add(event.params.pool);
}
);

// Reference: orderbook-subgraph/src/poolFactory.ts
indexer.onEvent(
  { contract: "PoolFactory", event: "PoolCreated" },
  async ({ event, context }) => {
  // TODO: Implement business logic from subgraph
  // Reference: orderbook-subgraph/src/poolFactory.ts - handlePoolCreated
}
); 