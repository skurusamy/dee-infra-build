"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    sqft: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Quote request submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-sky-600 rounded-xl shadow-lg p-8 md:p-10 text-center"
    >
      <h2 className="text-white text-lg font-semibold mb-6">
        Fill the form. Get your free quote!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-white text-gray-900 w-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-white text-gray-900 w-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          value={form.phone}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-white text-gray-900 w-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-white text-gray-900 w-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-white text-gray-900 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        >
          <option value="">Select a service type</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Interior</option>
          <option>Infrastructure</option>
        </select>
        <input
          type="number"
          name="sqft"
          placeholder="Enter the Sqft value"
          value={form.sqft}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-white text-gray-900 w-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>

      {/* Submit button */}
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-sky-600 font-semibold hover:bg-gray-100 transition shadow-md"
        >
          GET FREE QUOTE
          <span className="text-xl">↗</span>
        </button>
      </div>
    </form>
  );
}
