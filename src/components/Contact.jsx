import React from "react";

const Contact = () => {
  return (
    <section className="px-6 py-20 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-100">Contact Me</h2>
      <p className="text-gray-400 mb-6">
        I’m currently open for projects or collaborations. Reach out and say hi!
      </p>
      <a
        href="mailto:khaya@example.com"
        className="inline-block px-6 py-3 bg-gradient-to-r from-[#ff7e5f] to-[#bd14a3] rounded-full font-semibold text-white transition-transform hover:-translate-y-1"
      >
        Send Email
      </a>
    </section>
  );
};

export default Contact;
