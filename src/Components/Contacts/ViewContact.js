import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBCardHeader,
} from "mdbreact";
import { useSelector } from "react-redux";
import Header from "../../CommonComponents/Header";

const ViewContact = (props) => {
  let { id } = useParams();

  const viewContact = useSelector((state) =>
    state.contactList.find((c) => c.id == id)
  );

  return (
    <Fragment>
      <MDBContainer>
        <Header title="View Contact" />
        <MDBRow>
          <MDBCol md="6">
            {!viewContact ? (
              <h4>No Contact Found</h4>
            ) : (
              <div>
                <h4>
                  <label className="font-weight-bold mr-4">First Name</label>
                  <span className="font-weight-light">
                    {viewContact.firstName}
                  </span>
                </h4>
                <h4>
                  <label className="font-weight-bold mr-4">Last Name</label>
                  <span className="font-weight-light">
                    {viewContact.lastName}
                  </span>
                </h4>
                <h4>
                  <label className="font-weight-bold mr-4">Email</label>
                  <span className="font-weight-light">{viewContact.email}</span>
                </h4>
                <h4>
                  <label className="font-weight-bold mr-4">Phone Number</label>
                  <span className="font-weight-light">
                    {viewContact.phoneNumber}
                  </span>
                </h4>
                <h4>
                  <label className="font-weight-bold mr-4">Status</label>
                  {viewContact.status ? (
                    <MDBBadge color="primary">Active</MDBBadge>
                  ) : (
                    <MDBBadge color="default">Inactive</MDBBadge>
                  )}
                </h4>
              </div>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default ViewContact;
