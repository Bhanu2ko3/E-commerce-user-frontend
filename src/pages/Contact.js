// Pages/Contact.js
const Contact = () => (
  <div className="p-10">
    {/* Contact Details Box */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-10 text-center">
      <h3 className="text-2xl font-bold text-primary mb-4">Our Contact Details</h3>
      <p className="text-lg text-gray-700 mb-2">No -15, Senapura, Kindelpitiya, Welmilla, Bandaragama, Sri Lanka</p>
      <p className="text-lg text-gray-700 mb-2">+94 773983356</p>
      <p className="text-lg text-gray-700 mb-4">info@kavumkokis.com</p>
    </div>

    {/* Contact Form */}
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 w-1/2 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 w-1/2 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          className="border p-3 w-1/2 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-lg transition duration-300 hover:bg-secondary hover:text-white">
          Send
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
