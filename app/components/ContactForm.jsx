"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TextField } from "@mui/material";
import ButtonExtra from "./ButtonExtra";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 35px;
  gap: 0.5rem;
  .twoinline {
    display: flex;
    gap: 0.5rem;
    .MuiFormControl-root {
      width: 100%;
    }
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleClickSend = () => {
    console.log(getValues());
  };

  return (
    <ContactWrapper>
      <h2>Get in touch</h2>
      <div className="twoinline">
        <TextField {...register("name")} label="Name" variant="outlined" />
        <TextField {...register("email")} label="Email" variant="outlined" />
      </div>

      <TextField
        {...register("subject", {
          required: { message: "Subject is required" },
        })}
        label="Subject"
        variant="outlined"
      />
      <TextField
        multiline
        minRows={3}
        {...register("message")}
        label="Message"
        variant="outlined"
      />
      <ButtonExtra onClick={handleSubmit(handleClickSend)}>
        <h2>Send</h2>
      </ButtonExtra>
    </ContactWrapper>
  );
};

export default ContactForm;
