import React, { useState } from "react";
import FormInput from "../components/FormInput";

import "../static/styles/Order.scss";

const Order: React.FC = () => {
  const [formValues, setFormValues] = useState<any>({});

  const handleInput = (propName: string, value: string, isValid: boolean) => {
    console.log(value);

    if (formValues[propName] === undefined) {
      let newObj = {
        data: value,
        isValid: isValid,
      };
      setFormValues({ ...formValues, [propName]: newObj });
    } else {
      let tmpFormValues = formValues;
      tmpFormValues[propName]["data"] = value;
      tmpFormValues[propName]["isValid"] = isValid;

      setFormValues(tmpFormValues);
    }
  };

  return (
    <div className="order__container">
      <form action="">
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
      </form>
    </div>
  );
};

export default Order;
