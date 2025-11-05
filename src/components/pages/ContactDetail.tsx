const ContactDetail = () => {
  return (
    <section className="max-w-md mx-auto">
      <div className="shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Thank you for your interest! I’m always excited to connect,
          collaborate, or discuss new opportunities. I’ll get back to you as
          quickly as possible—whether you’re looking to hire me or just want to
          say hello.
        </p>
        <div className="mb-6 text-purple-700 dark:text-purple-400 font-semibold">
          Feel free to reach out anytime!
        </div>
        <div className="space-y-4">
          <div>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Email:
            </span>
            <a
              href="mailto:arowoloisaac01@gmail.com"
              className="ml-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              arowoloisaacabiodun01@gmail.com
            </a>
          </div>
          <div>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Github:
            </span>
            <a
              href="https://github.com/arowoloisaac"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              github.com/arowoloisaac
            </a>
          </div>
          <div>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Phone:
            </span>
            <a
              href="tel:+79528832964"
              className="ml-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              +7 (952) 883-29-64
            </a>
            <a
              href="tel:+2349024191288"
              className="ml-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              +234 (902) 419-12-88
            </a>
          </div>

          <div>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Telegram:
            </span>
            <a
              href="https://t.me/arowoloisaac"
              className="ml-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              @arowoloisaac
            </a>
          </div>
          <div>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Location:
            </span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              Tomsk, Russia
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              LinkedIn:
            </span>
            <a
              href="https://www.linkedin.com/in/isaac-arowolo-07386325a/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              linkedin.com/in/isaac-arowolo-07386325a/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
