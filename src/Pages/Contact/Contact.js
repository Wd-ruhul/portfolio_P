import React from 'react';
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import mail from '../../Assets/mail.png'
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fa1tq4c",
        "template_k66pn52",
        form.current,
        "QnG8v-QqC74kw8J3M"
      )
      .then(
        (result) => {
          console.log(result.text);
           toast(" Message Send! ");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="pl-20 pr-20 bg-base-200">
      <h2 className="text-5xl text-primary">Contact</h2>
      <div className="flex ">
        <div className="w-4/5 flex justify-center items-center mr-20 ">
          <form
            ata-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <br />

            <input
              className="input input-bordered input-primary w-96 "
              type="text"
              name="user_name"
            />
            <br />
            <label>Email</label>
            <br />
            <input
              className="input input-bordered input-primary w-96  "
              type="email"
              name="user_email"
            />
            <br />
            <label>Message</label>
            <br />
            <textarea
              className="textarea textarea-primary  w-96 "
              name="message"
            />
            <br />
            <input
              className="input input-bordered btn btn-primary w-96  "
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <div>
          <div>
            <img className="w-3/4" src={mail} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;