'use client';
import { useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { delay } from './Resume';
import { Spinner } from '../ui/spinner';
import { Button } from '../ui/button';

const ContactForm = () => {
   const form = useRef<HTMLFormElement | any>('');
   const [isClicked, setIsClicked] = useState<boolean>(false);

   const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsClicked(true);
      await delay(1500);

      await emailjs
         .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            {
               publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
         )
         .then(
            () => {
               toast.success('Message sent successfully!');
               form.current.reset();
            },
            (error) => {
               toast.error('Failed to send message. Please try again.');
               console.log('FAILED...', error.text);
            }
         );
      setIsClicked(false);
   };

   return (
      <section className="mx-auto max-w-xl md:max-w-lg lg: xl:min-w-2xl border rounded-lg card">
         <div className="px-5 sm:px-10 py-8 lg:px-16">
            <p className="mb-8 capitalize text-xl font-semibold">
               You can also get in touch by filling the form below.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
               <div>
                  <label className="block text-sm font-medium sm:pb-0.5">
                     Name
                  </label>
                  <Input
                     name="user_name"
                     type="text"
                     placeholder="Your name"
                     required
                     className="py-5"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium sm:pb-0.5">
                     Email
                  </label>
                  <Input
                     name="user_email"
                     type="email"
                     placeholder="yourmail@gmail.com"
                     required
                     className="py-5"
                  />
               </div>{' '}
               <div>
                  <label className="block text-sm font-medium sm:pb-0.5">
                     Subject
                  </label>
                  <Input
                     name="user_subject"
                     type="text"
                     placeholder="Subject"
                     required
                     className="py-5"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium sm:pb-0.5">
                     Message
                  </label>
                  <Textarea
                     rows={6}
                     className="h-40"
                     placeholder="Type your message here."
                     required
                     name="message"
                  />
               </div>
               <Button
                  disabled={isClicked ? true : false}
                  type="submit"
                  className=" w-full bg-primary active:bg-accent-foreground text-primary-foreground font-semibold h-12 py-3 px-6 rounded-md disabled:bg-destructive">
                  Send Message {isClicked ? <Spinner /> : ''}
               </Button>
            </form>
         </div>
      </section>
   );
};

export default ContactForm;
