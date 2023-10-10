import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//1. Full name (minimum 3, required)
//2. Subject (minimum 3, required)
//3. Email (must be valid email, required)
//4. Body (minimum 3, required)

//Yup schema
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Your first name should be at least 3 characters.")
      .max(10, "Your first name cannot be longer than 10 characters.")
      .required("Please enter your first name"),
    subject: yup
      .string()
      .min(3, "Subject should be at least 3 characters.")
      .max(10, "Subject cannot be longer than 10 characters.")
      .required("Please enter subject"),
    email: yup
      .string()
      .matches(EMAIL_REGEX, "Not a proper email")
      .required("Please enter your email"),
    message: yup
      .string()
      .min(3, "Message should be at least 3 characters.")
      .max(50, "Message cannot be longer than 10 characters.")
      .required("Please enter your message"),
  })
  .required();

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log("data", data);
    setSuccess(true);
  }

  return (
    <div className="shadow-md bg-slate-200 m-auto my-10 p-10 w-1/2 text-center rounded-md">
      <h1 className="text-black uppercase text-2xl font-bold my-5">
        Contact us
      </h1>
      <div>
        <form
          action=""
          className="flex flex-col gap-5 text-left text-black w-1/2 m-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label htmlFor="first-name">First name:</label>
            <input
              {...register("firstName")}
              id="first-name"
              placeholder="Your first name"
              className="bg-white shadow-md p-2 rounded-md focus:outline-none focus:shadow-inner"
            />
            <p className="text-xs text-red-500">{errors.firstName?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject">Subject:</label>
            <input
              {...register("subject")}
              id="subject"
              placeholder="Add subject"
              className="bg-white shadow-md p-2 rounded-md focus:outline-none focus:shadow-inner"
            />
            <p className="text-xs text-red-500">{errors.subject?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              className="bg-white shadow-md p-2 rounded-md focus:outline-none focus:shadow-inner"
              placeholder="Your email adress"
            />
            <p className="text-xs text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <input
              {...register("message")}
              id="message"
              placeholder="Write a message"
              className="bg-white shadow-md p-2 rounded-md focus:outline-none focus:shadow-inner"
            />
            <p className="text-xs text-red-500">{errors.message?.message}</p>
          </div>
          <div>{success ? <p>Success baba!</p> : ""}</div>
          <input
            type="submit"
            className=" shadow-lg p-3 bg-sky-600 rounded-md w-32 m-auto transition ease-out duration-200 hover:bg-sky-300 hover:cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export { Contact };
