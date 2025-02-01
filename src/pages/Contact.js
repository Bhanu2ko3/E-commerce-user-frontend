// Pages/Contact.js
const Contact = () => (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form className="mt-6 flex flex-col items-center">
        <input type="text" placeholder="Your Name" className="border p-2 w-1/2 mb-3" />
        <input type="email" placeholder="Your Email" className="border p-2 w-1/2 mb-3" />
        <textarea placeholder="Your Message" className="border p-2 w-1/2 mb-3"></textarea>
        <button className="bg-primary text-white px-4 py-2 rounded-lg">Send</button>
      </form>
    </div>
  );
  export default Contact;