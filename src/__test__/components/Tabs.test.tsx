import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Tabs from "../../Components/Tabs";
import { RootState } from "../../store/store";
import { sampleContactList } from "../fixtures/sampleContactList";
import { groupBy } from "lodash";
const mockStore = configureStore();
let store: any;

describe("Tabs component should render without issues", () => {
  beforeEach(() => {
    const initialState: RootState = {
      contacts: { loading: "fulfilled", error: null, list: sampleContactList },
      ui: { selectedTab: "b", selectedContact: sampleContactList[0] },
    };
    store = mockStore(initialState);
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Tabs
          groupedList={groupBy(sampleContactList, (c) =>
            c.name.first[0].toLocaleLowerCase()
          )}
        />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Tabs groupedList={groupBy(sampleContactList, (c) =>
            c.name.first[0].toLocaleLowerCase()
          )} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
