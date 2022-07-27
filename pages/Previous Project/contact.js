import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <p className="py-2 font-semibold uppercase text-md text-violet-500">
        <b>Contact Information</b>
      </p>
      <h2 className="text-5xl text-center">
        Contact <span className="font-bold">Us</span>
      </h2>
      <p className="pt-6 mx-10 text-xl text-center md:mx-40 text-violet-500">
        Have a great idea? Let's get in touch. The coffee is on us
      </p>
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center justify-center h-12 my-10 border rounded-md cursor-pointer group md:w-72 w-80 hover:shadow-lg hover:text-yellow-50 border-violet-500 hover:bg-violet-500">
          <Link href="#">
            <h2 className="text-xl text-violet-500 hover:text-yellow-50">
              Get In Touch
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
