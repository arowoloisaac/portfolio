import ContactForm from "./Contact-Form";
import ContactDetail from "./ContactDetail";

const Contact = () => {
  return (
    <div className="flex min-h-[70dvh] flex-col md:flex-row max-w-6xl mx-auto justify-center py-16 px-4">
      <div className="md:w-[40%] w-full">
        <ContactDetail />
      </div>
      <div className="md:w-[60%] w-full">
        <ContactForm />
      </div>
    </div>
  );
};


export default Contact;
