import ContactForm from "./Contact-Form";
import ContactDetail from "./ContactDetail";

const Contact = () => {
  return (
    <div className="relative flex min-h-screen flex-col lg:flex-row max-w-6xl gap-3 sm:gap-6 mx-auto lg:items-center lg:justify-center py-16 px-4">
      <div className="lg:w-[45%] w-full ">
        <ContactDetail />
      </div>
      <div className="lg:w-[55%] w-full">
        <ContactForm />
      </div>
    </div>
  );
};


export default Contact;
