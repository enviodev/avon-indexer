import assert from "assert";
import { 
  TestHelpers,
  OrderBook_BorrowOrderCanceled
} from "generated";
const { MockDb, OrderBook } = TestHelpers;

describe("OrderBook contract BorrowOrderCanceled event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for OrderBook contract BorrowOrderCanceled event
  const event = OrderBook.BorrowOrderCanceled.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("OrderBook_BorrowOrderCanceled is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await OrderBook.BorrowOrderCanceled.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualOrderBookBorrowOrderCanceled = mockDbUpdated.entities.OrderBook_BorrowOrderCanceled.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedOrderBookBorrowOrderCanceled: OrderBook_BorrowOrderCanceled = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      borrower: event.params.borrower,
      rate: event.params.rate,
      ltv: event.params.ltv,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualOrderBookBorrowOrderCanceled, expectedOrderBookBorrowOrderCanceled, "Actual OrderBookBorrowOrderCanceled should be the same as the expectedOrderBookBorrowOrderCanceled");
  });
});
