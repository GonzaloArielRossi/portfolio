import React, { useRef, useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
function ContactForm() {
  const form = useRef();
  const [modal, setModal] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          result.status === 200 && setModal(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="">
      <h1 className="title is-size-2 has-text-centered mt-6 mb-6">
        Thanks for reaching out!
      </h1>
      <form ref={form} className="mt-6 mb-6 --width" onSubmit={sendEmail}>
        <div className="columns mt-6">
          <div className="field column">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                name="name"
                placeholder="Name"
                type="text"
              />
            </div>
          </div>
          <div className="field column">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                name="email"
                placeholder="Email"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              name="message"
              placeholder="Message"
              rows="8"
            ></textarea>
          </div>
        </div>
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </form>
      {modal && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card ">
            <header className="modal-card-head has-text-centered ">
              <p className="modal-card-title is-size-3">
                ✅Message Sent Successfully!
              </p>
              <button
                aria-label="close"
                className="delete"
                onClick={() => setModal(false)}
              ></button>
            </header>
            <section className="modal-card-body has-text-centered is-size-5">
              <p>{'🙏Thank you for your interest'}</p>
              <p>{'📩I will respond shortly'}</p>
            </section>
            <footer className="modal-card-foot is-justify-content-space-around">
              <Link to="/">
                <button className="button is-primary is-rounded has-text-weight-bold --hover is-size-6">
                  Back To Home
                </button>
              </Link>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
