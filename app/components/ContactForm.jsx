"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TextField } from "@mui/material";
import ButtonExtra from "./ButtonExtra";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <ContactWrapper>
        <h2>Get in touch</h2>
        <div className="twoinline">
          <TextField
            {...register("name", {
              required: "Name is required",
            })}
            label="Name"
            variant="outlined"
            error={errors.name ? true : false}
            helperText={errors.name?.message}
          />
          <TextField
            {...register("email", {
              required: "Email is required",
            })}
            label="Email"
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />
        </div>

        <TextField
          {...register("subject", {
            required: "Subject is required",
          })}
          label="Subject"
          variant="outlined"
          error={errors.subject ? true : false}
          helperText={errors.subject?.message}
        />
        <TextField
          multiline
          minRows={3}
          {...register("message", {
            required: "Message is required",
          })}
          label="Message"
          variant="outlined"
          error={errors.message ? true : false}
          helperText={errors.message?.message}
        />
        <ButtonExtra onClick={handleSubmit(handleClickSend)}>
          <h2>Send</h2>
        </ButtonExtra>
      </ContactWrapper>
    </motion.div>
  );
};

export default ContactForm;
