

"use client";

import { sendContactEmail } from "@/app/contact";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      const [loading, setLoading] = useState(false);
      const [responseMessage, setResponseMessage] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   setLoading(true);
      //   setResponseMessage("");
    
      //   try {
      //     const result = await sendContactEmail(formData); // Use server action
      //     if (result.success) {
      //       setResponseMessage(result.message);
      //       console.log("before send")
      //       setFormData(() => ({
      //         name: "",
      //         email: "",
      //         subject: "",
      //         message: "",
      //       }));
      //       console.log("after send contact email")
      //     } else {
      //       setResponseMessage(result.message || "Failed to send message.");
      //     }
      //   } catch (error) {
      //     setResponseMessage("An error occurred. Please try again later.");
      //   } finally {
      //     setLoading(false);
      //   }
      // };
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");
    
        try {
          console.log("Before sending request");
          const result = await sendContactEmail(formData); // Call Next.js server action
          console.log("After sending request");
    
          if (result?.success) {
            setResponseMessage(result?.message);
            setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
            console.log("Form reset after successful submission");
          } else {
            setResponseMessage(result?.message || "Failed to send message.");
          }
        } catch (error) {
          console.error("Error:", error);
          setResponseMessage("An error occurred. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
  return (
            
    <section className="py-8 flex items-center justify-center bg-gray-900 text-white p-6 flex-col" id="contact">
      <h2 className="font-extrabold text-4xl text-primary text-center py-4">
        CONTACT ME
      </h2>
      <div className="bg-gray-800 my-5 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <div className="text-center mb-8">
          <h3 className="text-lg uppercase tracking-widest text-gray-400">
            Get In Touch
          </h3>
          <h1 className="text-xl xs:text-3xl font-bold">Let’s Discuss Projects</h1>
          <p className="text-gray-400 mt-4">
            Get in touch with us for any kind of help. We are here to give you
            the best and also here to help you to find your projects.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject *"
              required
              className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message *"
              rows="4"
              required
              className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {responseMessage && (
          <p
            className={`mt-4 text-center ${
              responseMessage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {responseMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

// "use client";

// import { sendContactEmail } from "@/app/contact";
// import React, { useState, useEffect } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMessage("");

//     try {
//       const result = await sendContactEmail(formData);
//       console.log(result); // Debugging

//       if (result?.success) {
//         setResponseMessage(result.message);
//         setSuccess(true);
//       } else {
//         setResponseMessage(result?.message || "Failed to send message.");
//       }
//     } catch (error) {
//       setResponseMessage("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (success) {
//       setFormData({ name: "", email: "", subject: "", message: "" });
//       setSuccess(false);
//     }
//   }, [success]);

//   return (
//     <section className="py-8 flex items-center justify-center bg-gray-900 text-white p-6 flex-col">
//       <h2 className="font-extrabold text-4xl text-primary text-center py-4">
//         CONTACT ME
//       </h2>
//       <div className="bg-gray-800 my-5 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
//         <div className="text-center mb-8">
//           <h3 className="text-lg uppercase tracking-widest text-gray-400">
//             Get In Touch
//           </h3>
//           <h1 className="text-xl xs:text-3xl font-bold">Let’s Discuss Projects</h1>
//           <p className="text-gray-400 mt-4">
//             Get in touch with us for any kind of help. We are here to give you
//             the best and also here to help you to find your projects.
//           </p>
//         </div>

//         <form key={JSON.stringify(formData)} className="space-y-6" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" required className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2" />
//             </div>
//             <div>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2" />
//             </div>
//           </div>
//           <div>
//             <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2" />
//           </div>
//           <div>
//             <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message *" rows="4" required className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-2"></textarea>
//           </div>
//           <div className="text-center">
//             <button type="submit" disabled={loading} className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>

//         {responseMessage && (
//           <p className={`mt-4 text-center ${responseMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
//             {responseMessage}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
