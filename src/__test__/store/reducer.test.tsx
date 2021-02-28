import { RootState, rootReducer } from "../../store/store";
import { fetchContacts } from "../../store/modules/contacts";
import { setSelectedContact, setSelectedTab } from "../../store/modules/ui";
import { sampleContactList } from "../fixtures/sampleContactList";
import { configJson } from "../../constants";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getInitialState = (initial?: RootState) =>
  rootReducer(initial as RootState, {} as any);

describe("Reducer data flow", () => {
  it("should match a snapshot", () => {
    const initialState = getInitialState();
    expect(initialState).toMatchSnapshot();
  });

  it("store data on contacts slice on fetchContacts.fulfilled", () => {
    const initialState = getInitialState();
    const state = rootReducer(
      initialState,
      fetchContacts.fulfilled(sampleContactList, "", configJson)
    );
    expect(state.contacts.list).toBe(sampleContactList);
    expect(state.contacts.error).toEqual(null);
    expect(state.contacts.loading).toEqual("fulfilled");
  });

  it("sets selected tab", () => {
    const randomIndex = getRandomInt(0, 10000) % configJson.tabs.length;
    const initialState = getInitialState();
    const randomTab = configJson.tabs[randomIndex];
    const state = rootReducer(initialState, setSelectedTab(randomTab));
    expect(state.ui.selectedTab).toEqual(randomTab);
  });
  it("sets selected contact", () => {
    const initialState = getInitialState();
    const state = rootReducer(
      initialState,
      setSelectedContact(sampleContactList[0])
    );
    expect(state.ui.selectedContact).toBe(sampleContactList[0]);
  });
});
