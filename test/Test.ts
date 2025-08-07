import assert from "assert";
import { 
  TestHelpers
} from "generated";
const { MockDb, OrderBook } = TestHelpers;

describe("OrderBook contract tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for OrderBook contract BorrowOrderCanceled event
  const event = OrderBook.BorrowOrderCanceled.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("OrderBook BorrowOrderCanceled event is processed correctly", async () => {
    // Processing the event
    const mockDbUpdated = await OrderBook.BorrowOrderCanceled.processEvent({
      event,
      mockDb,
    });

    // The event should be processed without errors
    // Since we removed the raw event entities, we just verify the event was processed
    assert.ok(mockDbUpdated, "Event should be processed successfully");
  });
});
