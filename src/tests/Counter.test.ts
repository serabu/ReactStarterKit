import configureStore from "redux-mock-store";

describe("Home", () => {
  const middlewares: never[] = [];
  const mockStore = configureStore(middlewares);
  const UpdateCountAction = () => ({ type: "UPDATE_COUNT_ACTION" });

  it("should be dispatch actions", () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(UpdateCountAction());
    const actions = store.getActions();
    const expectedPayload = { type: "UPDATE_COUNT_ACTION" };
    expect(actions).toEqual([expectedPayload]);
  });
});
