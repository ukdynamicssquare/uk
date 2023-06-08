import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const BlogSubscriberForm = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs.sendForm('service_4voumj7', 'template_32hvoqv', form.current, 'mJ38M6WTmU7KRrtuZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
      setTimeout(function() {
        e.target.reset();
        router.push("/thank-you/");
      }, 500);
      
  };


    return (
        <div>
             <div className="main-form-wrper">

             <form className="sbb-form" ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="*Work Email"
                                name="email"
                                required
                              />
                               <input type="hidden" value={router.asPath} name="url" />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary fomr-submit"
                            >
                              Subscribe
                            </button>
                            <div className="" role="status">
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </form>
              </div>
        </div>
    );
}

export default BlogSubscriberForm;
