import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import ContactForm from "./ContactForm";

const EditContact = (props) => {
  let { id } = useParams();

  const editContact = useSelector((state) =>
    state.contactList.find((c) => c.id == id)
  );
  const dispatch = useDispatch();

  const updateContact = (data) => {
    const contact = { ...data, id: id };
    dispatch({ type: "UPDATE", val: contact });
    props.history.push("/");
  };

  return (
    <Fragment>
      <MDBContainer>
        <h2>Edit Contact</h2>
        <MDBRow>
          <MDBCol md="6">
            {editContact ? (
              <ContactForm
                defaultValues={editContact}
                onSubmit={updateContact}
                submitButtonText="Update"
              />
            ) : (
              <h4>No Contact Found</h4>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default withRouter(EditContact);
