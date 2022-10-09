import React, { useRef, useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import { formVerification } from '../../../helpers/formVerification';

function ContactForm() {
  const form = useRef();
  const [modal, setModal] = useState({
    state: false,
    title: '✅Message Sent Successfully!',
    line1: '🙏Thank you for your interest',
    line2: '📩I will respond shortly'
  });
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      !formVerification(
        e.target.name.value,
        e.target.email.value,
        e.target.message.value
      )
    ) {
      setModal({
        state: true,
        title: '⛔Oops! something went wrong',
        line1: '🙏Email service is currently down',
        line2: '📩Please write to me at gonzaloarielrossi@gmail.com'
      });
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          result.status === 200 && setModal({ ...modal, state: true });
        },
        () => {
          setLoading(false);
          setModal({
            state: true,
            title: '⛔Oops! something went wrong',
            line1: '🙏Email service is currently down',
            line2: '📩Please write to me at gonzaloarielrossi@gmail.com'
          });
        }
      );
  };

  return (
    <div className="">
      <h1 className="title is-size-2 has-text-centered mt-6 mb-6 px-6">
        Thanks for reaching out!
      </h1>
      <form ref={form} className="mt-6 mb-6 --width" onSubmit={sendEmail}>
        <div className="columns mt-6">
          <div className="field column">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                maxLength={50}
                name="name"
                placeholder="Name"
                required="required"
                type="text"
              />
            </div>
          </div>
          <div className="field column">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                maxLength={50}
                name="email"
                placeholder="Email"
                required="required"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              maxLength={500}
              name="message"
              placeholder="Message"
              required="required"
              rows="8"
            ></textarea>
          </div>
        </div>
        <div className="control ml-auto is-flex is-justify-content-flex-end">
          <button
            className={
              loading
                ? 'button is-primary is-rounded has-text-weight-bold --hover is-size-5 is-loading'
                : 'button is-primary is-rounded has-text-weight-bold --hover is-size-5'
            }
          >
            Submit
          </button>
        </div>
      </form>
      {modal.state && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card ">
            <header className="modal-card-head has-text-centered ">
              <p className="modal-card-title is-size-3">{modal.title}</p>
              <button
                aria-label="close"
                className="delete"
                onClick={() => setModal({ ...modal, state: false })}
              ></button>
            </header>
            <section className="modal-card-body has-text-centered is-size-5">
              <p>{modal.line1}</p>
              <p>{modal.line2}</p>
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
