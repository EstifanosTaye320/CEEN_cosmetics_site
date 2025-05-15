const ContactForm = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name *"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="tel"
          placeholder="Phone number *"
        />
      </div>
      <div className="mb-4">
        <textarea
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="message"
          placeholder="Write Message"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-pink-400 hover:bg-pink-500 w-full text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          SEND
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
