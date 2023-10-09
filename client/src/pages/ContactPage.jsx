import { Facebook, Instagram, Twitter } from '../utils/icons';

const ContactPage = () => {
  return (
    <div className="w-full h-[calc(100vh-56px)] pt-24 font-montserrat">
      <div>
        <h3 className="text-3xl font-medium text-center">Contact Us</h3>
        <h5 className="text-base text-slate-500 text-center mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          eligendi?
        </h5>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <form className="space-y-4" action="">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="">
                Name
              </label>
              <input
                className="bg-[#f8fafc] px-2 py-1 rounded border shadow-sm"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="">
                Email
              </label>
              <input
                className="bg-[#f8fafc] px-2 py-1 rounded border shadow-sm"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Message
            </label>
            <textarea
              type="text"
              className="bg-[#f8fafc] px-2 py-1 rounded border shadow-sm"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="px-8 py-2 rounded font-medium text-white bg-green-500">
              Send
            </button>
          </div>
          <div className="w-full pt-4">
            <hr />
          </div>
        </form>
        <div className="w-full text-center pt-8">
          <h3 className="underline text-green-500 cursor-pointer">
            example@gmail.com
          </h3>
          <h3 className="pt-4">49 Smith St. </h3>
          <h3>Saint Cloud, MN 56301</h3>
          <div className="flex flex-row items-center justify-center gap-4 mt-4">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
