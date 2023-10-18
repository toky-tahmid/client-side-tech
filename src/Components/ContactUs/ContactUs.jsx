const ContactUs = () => {
  return (
    <>
      <div className="mt-9 text-3xl font-bold text-center">
        <h1>Contact US</h1>
        <br />
        <hr />
      </div>
      <br />
      <div className="flex justify-evenly">
        <div>
          <h2> OUR INFORMATION</h2>
          <hr />
          <br />
          <h3>
            Leo Digital 175 SW 7th St #2009 Miami,
            <br /> Fl 33130,Dhaka Bangladesh.
          </h3>
          <br />
          <hr />
          <h4>Call us: 0123456789</h4>
          <br />
          <hr />
          
          <h4>Email us: demo@demo.com</h4>
        </div>

        <div>
          <div className="md:flex-row lg:flex gap-4 mt-4 ">
            <div className="w-72">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="w-72">
              <label className="font-semibold">Email</label>
              <input
                type="text"
                placeholder="E-mail"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="mt-4 w-96 ">
            <label className="font-semibold ml-2">Message</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Write Message"
            ></textarea>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
