import React from "react";
import { useForm } from "react-hook-form";
import { MDBIcon, MDBBtn } from "mdbreact";

const ContactForm = ({ defaultValues, onSubmit, submitButtonText }) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="defaultFormContactNameEx" className="grey-text">
        First name
      </label>
      <input
        type="text"
        className="form-control"
        name="firstName"
        id="firstName"
        ref={register({
          required: "Required",
        })}
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <span className="error">First name is required</span>
      )}
      <br />
      <label htmlFor="defaultFormContactNameEx" className="grey-text">
        Last name
      </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        className="form-control"
        ref={register({
          required: "Required",
        })}
      />
      {errors.lastName && errors.lastName.type === "required" && (
        <span className="error">Last name is required</span>
      )}
      <br />
      <label htmlFor="defaultFormContactEmailEx" className="grey-text">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && errors.email.type === "required" && (
        <span className="error">Email is required</span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span className="error">Invalid email</span>
      )}
      <br />
      <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
        Phone Number
      </label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        className="form-control"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[0-9]+$/i,
          },
          minLength: 10,
          maxLength: 10,
        })}
      />
      {errors.phoneNumber && errors.phoneNumber.type === "required" && (
        <span className="error">Phone number is required</span>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
        <span className="error">Phone number is min of 10 digit</span>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
        <span className="error">Phone number is max of 10 digit</span>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
        <span className="error">Phone number should contains digit</span>
      )}
      <div className="mt-4">
        <MDBBtn color="primary" type="submit">
          {submitButtonText}
          <MDBIcon far icon="save" className="ml-2" />
        </MDBBtn>
      </div>
    </form>
  );
};

export default ContactForm;
