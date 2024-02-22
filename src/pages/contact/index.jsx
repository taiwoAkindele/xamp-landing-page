import React from "react";
import Layout from "../../components/layout";
import ContactForm from "./form";

const ContactPage = () => {
  return (
    <div>
      <Layout noAccess={true}>
        <ContactForm />
      </Layout>
    </div>
  );
};

export default ContactPage;
