import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mnqkdvgy");
  if (state.succeeded) {
      return <p>Thanks for your email!</p>;
  }
  return (
      <form className="d-flex flex-column w-25 align-self-center" onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='youremail@email.com'
        className='my-1'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='my-1'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='my-1'>
        Submit
      </button>
    </form>
  );
}
// function EmailForm() {
//   return (
//     <ContactForm />
//   );
// }
export default ContactForm;