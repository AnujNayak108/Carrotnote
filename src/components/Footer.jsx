import { LuInstagram } from "react-icons/lu";

const Footer = () => {
    return (
      <footer className="bg-[#199be9] text-white py-10 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Platform Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">➤</span> How does it work?
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> Sell on Stuvia
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> Tips to sell more
              </li>
            </ul>
          </div>
  
          {/* Company Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">➤</span> About
              </li>
              <li className="mt-4">
                <button className="flex items-center border border-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 transition">
                  <LuInstagram className="h-5 w-5 m-2"/>
                  Follow us on Instagram
                </button>
              </li>
            </ul>
          </div>
  
          {/* Copyright Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Copyright</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">➤</span> Copyright Center
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> Code of Honor
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> Community Guidelines
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> Notice & Takedown
              </li>
            </ul>
          </div>
  
          {/* Need Help Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Need help?</h3>
            <p className="mb-4">
              We're available through e-mail, live chat, and Facebook.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">❓</span> FAQ
              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span> Questions? Leave a message!
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  