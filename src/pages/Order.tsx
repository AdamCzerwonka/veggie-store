import React from "react";
import FormInput from "../components/FormInput";

import "../static/styles/Order.scss";

const Order: React.FC = () => {
  let formValues: any = {};

  const handleInput = (propName: string, value: string, isValid: boolean) => {
    if (formValues[propName] === undefined) {
      let newObj = {
        data: value,
        isValid: isValid,
      };
      formValues = { ...formValues, [propName]: newObj };
    } else {
      formValues[propName]["data"] = value;
      formValues[propName]["isValid"] = isValid;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isFormValid = true;

    if (Object.keys(formValues).length !== 9) {
      isFormValid = false;
    }

    Object.keys(formValues).forEach((key) => {
      if (formValues[key]["isValid"] === false) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      console.log("val");
    } else {
      console.log("no");
    }
  };

  return (
    <div className="order__container">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <h2>Personal Info</h2>
        <FormInput
          fieldName={"Name"}
          regex={/^[A-Z]{1,50}$/i}
          inputHandler={handleInput}
        />
        <FormInput
          fieldName={"Surname"}
          regex={/^[A-Z]{1,50}$/i}
          inputHandler={handleInput}
        />
        <FormInput
          fieldName={"Email"}
          regex={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
          inputHandler={handleInput}
        />
        <FormInput
          fieldName={"Phone number"}
          propName={"phoneNumber"}
          regex={/^\d{9}$/i}
          inputHandler={handleInput}
        />
        <h2>Address info</h2>
        <FormInput
          fieldName={"City"}
          regex={/^[A-Z]{1,50}$/i}
          inputHandler={handleInput}
        />
        <FormInput
          fieldName={"Zip code"}
          propName={"ZipCode"}
          regex={/^\d{2}-\d{3}$/i}
          inputHandler={handleInput}
        />
        <FormInput
          fieldName={"Street"}
          regex={/^[A-Z]{1,50}$/i}
          inputHandler={handleInput}
        />
        <FormInput
          fieldName={"House number"}
          propName={"HouseNumber"}
          regex={/^[A-Z0-9]{1,5}$/i}
          inputHandler={handleInput}
        />
        <FormInput
          fieldName={"Apartment number (optional)"}
          propName={"ApartmentNumber"}
          regex={/^\d{0,4}$/i}
          inputHandler={handleInput}
        />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
};

export default Order;
