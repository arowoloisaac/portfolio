import { useRef } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | any>('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="mx-auto  ">
      <div className="bg-white dark:bg-gray-900  shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Feel free to reach out using the form below.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <Input
              name="user_name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <Input
              name="user_email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <Textarea
              rows={6}
              className="h-32"
              placeholder="Type your message here."
              required
              name="message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-md shadow transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
