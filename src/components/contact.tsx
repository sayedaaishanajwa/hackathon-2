"use client";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <main>
      
      <div className="h-[30vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/cool.jpg')" }}></div>

      {/* Contact Header */}
      <div className="max-w-screen-2xl px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-black font-poppins">Get In Touch With Us</h1>
        <p className="text-lg text-gray-500 font-normal mt-4">
          For more information about our products & services, please feel free to drop us an email. 
          Our staff will always be there to help you. Don’t hesitate!
        </p>
      </div>
  {/* Contact Info & Form Section */}
  <div className="flex flex-col md:flex-row justify-center max-w-screen-2xl mx-auto px-4">
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-4 text-3xl text-gray-700">
            <TiLocation/>
            <div>
              <h2 className="font-bold text-gray-900 text-2xl">Address</h2>
              <p className="text-black mt-1">236 5th Avenue, New York NY 10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 text-3xl text-gray-700">
            <FaPhone/>
            <div>
              <h2 className="font-bold text-gray-900 text-2xl">Phone</h2>
              <p className="text-black mt-1">Mobile: +(84) 546-6789</p>
              <p className="text-black mt-1">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-4 text-3xl text-gray-700">
            <IoTimeSharp/>
            <div>
            <h2 className="font-bold text-gray-900 text-2xl">Working Time</h2>
              <p className="text-black mt-1">Monday-Friday: 9:00-22:00</p>
              <p className="text-black mt-1">Saturday-Sunday: 9:00-21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full md:w-[600px] bg-white p-8 shadow-lg rounded-lg mt-8 md:mt-0">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}