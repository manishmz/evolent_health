const intializeState = {
  contactList: [
    {
      id: 1,
      firstName: "Jhon",
      lastName: "Parker",
      email: "jhonparker@gmm.com",
      phoneNumber: "3486346434",
      status: 1,
    },
    {
      id: 2,
      firstName: "Kiel",
      lastName: "Brown",
      email: "kielbrown@gmm.com",
      phoneNumber: "423344534",
      status: 0,
    },
    {
      id: 3,
      firstName: "Treck",
      lastName: "White",
      email: "treckwhite@gmm.com",
      phoneNumber: "3486346434",
      status: 1,
    },
  ],
  idCounter: 3,
};

const reducer = (state = intializeState, action) => {
  const newState = { ...state, idCounter: state.idCounter + 1 };
  newState.contactList = state.contactList.map((row) => {
    return { ...row };
  });
  if (action.type === "ADD") {
    newState.contactList.push({ id: newState.idCounter, ...action.val });
  } else if (action.type === "INACTIVE") {
    newState.contactList.map((contact) => {
      if (action.val[contact.id]) {
        contact.status = 0;
      }
    });
  } else if (action.type === "INACTIVE_ALL") {
    newState.contactList.map((contact) => {
      contact.status = 0;
    });
  } else if (action.type === "UPDATE") {
    const obj = newState.contactList.find((o, i) => {
      if (o.id == action.val.id) {
        newState.contactList[i] = { ...newState.contactList[i], ...action.val };
        return true;
      }
    });
  }

  return newState;
};

export default reducer;
