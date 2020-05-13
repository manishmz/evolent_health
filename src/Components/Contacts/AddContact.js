import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardHeader } from "mdbreact";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import ContactForm from "./ContactForm";
import Header from "../../CommonComponents/Header";

const AddContact = (props) => {
  const dispatch = useDispatch();

  const saveContact = (data) => {
    const contact = { ...data, status: 1 };
    dispatch({ type: "ADD", val: contact });
    props.history.push("/");
  };

  return (
    <Fragment>
      <MDBContainer>
        <Header title="Add Contact" />
        <MDBRow>
          <MDBCol md="6">
            <ContactForm onSubmit={saveContact} submitButtonText="Add" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default withRouter(AddContact);
