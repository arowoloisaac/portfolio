import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  return (
    <section className="mx-auto  ">
      <div className="bg-white dark:bg-gray-900  shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Feel free to reach out using the form below.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <Input type="text" placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <Input type="email" placeholder="Email" required />
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
}

export default ContactForm