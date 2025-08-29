import React, { useState } from "react";
import { MessageCircle } from "lucide-react"; // WhatsApp-like icon

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
    setSubmitted(true);
    form.reset();
  } catch (error) {
    alert("Something went wrong, please try again.");
  }
};


  return (
    <section
      id="contact"
      className="bg-slate-900 px-1 sm:px-2 py-10 w-full text-gray-50"
    >
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start shadow-lg px-6 py-8 rounded-2xl bg-slate-800">
        {/* Contact Text / Info */}
        <div className="w-full md:w-2/5">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
            Let’s Connect
          </h2>
          <p className="text-slate-400 mb-6">
            Got a project idea or just want to say hi? Feel free to reach out
            through this form or via my contact details below.
          </p>

          <div className="space-y-4 text-slate-300">
            <p>
              📧{" "}
              <a
                href="mailto:yourmail@example.com"
                className="text-slate-100 hover:underline"
              >
                sohazulike@example.com
              </a>
            </p>
            <p>
              📱{" "}
              <a
                href="tel:+2348000000000"
                className="text-slate-100 hover:underline"
              >
                +234 806 299 1395
              </a>
            </p>
            <p>
              🌐{" "}
              <a
                href="https://github.com/Gentlestan"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/ohazulike-stanley/"
                className="text-cyan-400 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="w-full md:w-3/5 space-y-4"
        >
          {/* Required hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="block mb-1 text-slate-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-2 rounded-md text-white font-semibold w-full sm:w-auto"
          >
            Send Message
          </button>

          {/* Success Message */}
          {submitted && (
            <p className="text-green-400 mt-2 text-sm">
              ✅ Thank you! Your message has been sent. I’ll get back to you soon.
            </p>
          )}
        </form>
      </div>

      {/* Closing CTA */}
      <p className="text-center mt-8 text-slate-400">
        I usually reply within 24 hours — looking forward to hearing from you! 🚀
      </p>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348062991395"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
};

export default Contact;
