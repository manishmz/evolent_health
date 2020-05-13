import React, { Fragment, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBDataTable,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardHeader,
} from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const ContactList = (props) => {
  const contactList = useSelector((state) => state.contactList);
  const [allChecked, changeAllChecked] = useState(false);
  const dispatch = useDispatch();

  const setAllChecked = () => {
    changeAllChecked(!allChecked);
  };
  const checkedIds = {};
  const onCheckboxChange = (id, checked) => {
    if (checked) {
      checkedIds[id] = 1;
    } else {
      delete checkedIds[id];
    }
  };
  const columns = [
    {
      label: (
        <MDBInput
          className="checkbox"
          type="checkbox"
          id="header"
          onClick={setAllChecked}
        />
      ),
      field: "check",
    },
    {
      label: "First Name",
      field: "firstName",
    },
    {
      label: "Last Name",
      field: "lastName",
    },
    {
      label: "Email",
      field: "email",
    },
    {
      label: "Phone Number",
      field: "phoneNumber",
    },
    {
      label: "Status",
      field: "status",
    },
    {
      label: "Action",
      field: "action",
    },
  ];

  const deleteContact = (id) => {
    dispatch({ type: "INACTIVE", val: { [id]: 1 } });
  };

  const actionTemplate = (id, status) => (
    <div>
      <MDBBtn
        color="purple"
        outline
        size="sm"
        onClick={() => props.history.push(`/view/${id}`)}
      >
        <i className="fa fa-eye blue-text" aria-hidden="true"></i>
      </MDBBtn>
      <MDBBtn
        disabled={status ? false : true}
        color="purple"
        outline
        size="sm"
        onClick={() => props.history.push(`/edit/${id}`)}
      >
        <i className="fa fa-edit blue-text" aria-hidden="true"></i>
      </MDBBtn>
      <MDBBtn
        disabled={status ? false : true}
        color="purple"
        outline
        size="sm"
        onClick={() => {
          deleteContact(id);
        }}
      >
        <i className="fa fa-trash-alt blue-text" aria-hidden="true"></i>
      </MDBBtn>
    </div>
  );

  const rows = contactList.map((row) => {
    const r = { ...row };
    r.status = row.status ? (
      <h5>
        <MDBBadge color="primary">Active</MDBBadge>
      </h5>
    ) : (
      <h5>
        <MDBBadge color="default">Inactive</MDBBadge>
      </h5>
    );
    r.action = actionTemplate(row.id, row.status);
    r.check = (
      <MDBInput
        type="checkbox"
        className="checkbox"
        id={row.id + ""}
        checked={allChecked || row.isCheck}
        onClick={(e) => {
          onCheckboxChange(row.id, e.target.checked);
        }}
      />
    );
    r.isCheck = false;
    return r;
  });

  const deleteContacts = () => {
    if (allChecked) {
      dispatch({ type: "INACTIVE_ALL" });
      return;
    }
    dispatch({ type: "INACTIVE", val: checkedIds });
  };

  const table = { columns, rows };

  return (
    <Fragment>
      <MDBContainer>
        <MDBCardHeader color="deep-orange lighten-1" className="mb-5">
          <h3>Contacts</h3>
        </MDBCardHeader>
        <MDBRow>
          <MDBCol md="12">
            <MDBBtn
              color="danger"
              className="float-right"
              onClick={() => deleteContacts()}
            >
              Add Delete
            </MDBBtn>
            <MDBBtn
              color="primary"
              className="float-right"
              onClick={() => props.history.push("/add")}
            >
              Add Contact
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <MDBDataTable
              sortable={false}
              noBottomColumns
              bordered
              small
              data={table}
              className="align-center"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default withRouter(ContactList);
