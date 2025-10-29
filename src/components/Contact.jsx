import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          I'm currently open for new projects and collaborations. Whether you
          have a question or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto:khaya@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          Send Email
        </a>
      </div>
    </section>
  );
}
