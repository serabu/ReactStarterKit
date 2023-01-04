import configureStore from "redux-mock-store";
import * as reduxHooks from "react-redux";
import * as actions from "../action/action";

describe("Home", () => {
  const middlewares: any = [];
  const mockStore = configureStore(middlewares);
  const UpdateCountAction = () => ({ type: "UPDATE_COUNT_ACTION" });

  it("should be dispatch actions", () => {
    // const mockedUpdateCountAction = jest.spyOn(actions, 'updateCountAction')
    // expect(mockedUpdateCountAction).toHaveBeenCalled
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(UpdateCountAction());
    const actions = store.getActions();
    const expectedPayload = { type: "UPDATE_COUNT_ACTION" };
    expect(actions).toEqual([expectedPayload]);
  });
});
