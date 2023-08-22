import React from "react";
import ContactForm from "./EmailForm";

// contact infomration with mailto form
export default function Contact() {
  return (
    <section class="d-flex flex-column">
      <h2 class="fs-4">Contact</h2>
      <ContactForm />
    </section>
  );
}
