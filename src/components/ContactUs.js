import { useState } from "react";
// import contact from "../../assets/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <div className="contact-container m-5 p-5 flex items-center justify-center">
      <div className="contact-left">
      {/* <img className="h-[400] rounded-lg" src={contact} alt="Contact us" /> */}
      </div>
      <div className="contact-right mx-5">
      <h1 className=" heading font-bold ">Contact Us</h1>
                <form  onSubmit={handleSubmit}>
                <input className="bg-orange-200 rounded-lg m-2 p-2" type="text" placeholder="Name" required/>
                  <input className="bg-orange-200 rounded-lg m-2 p-2" type="email" placeholder="Email" required />
                  <div className="flex m-5 p-5">
                  <textarea className="bg-orange-200 rounded-lg m-5 p-5" placeholder="Type your Message here..." required></textarea>
                  <button className=" rounded-lg p-4 "type="submit">Submit</button>
                    
                  </div>
                  
                    {message && <span>Thanks for contacting Monkey-Meal, We will reply ASAP.</span>}
                </form>
      </div>
    </div>
  );
};

export default Contact;