import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_3ezav0s",    // Your EmailJS Service ID
          "template_sniufyo",   // Your EmailJS Template ID
          form.current,
          "7wXhEptjHP5eaHoHY"   // Your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            setLoading(false); // Reset the button state
          },
          (error) => {
            console.error("Failed to send email: ", error.text);
            alert("Failed to send the message, please try again.");
            setLoading(false); // Reset the button state
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* User's Name */}
      <label>Your Name</label>
      <input type="text" name="from_name" required />

      {/* User's Email */}
      <label>Your Email</label>
      <input type="email" name="user_email" required />

      {/* User's Message */}
      <label>Your Message</label>
      <textarea name="message" required />

      {/* Hidden input for "to_name" */}
      <input type="hidden" name="to_name" value="Yosef Shammout" />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
