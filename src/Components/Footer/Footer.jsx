import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-black py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <Link to="/">
              <span className="ml-2 text-2xl font-bold text-blue-600">
                Lingo Bingo
              </span>
            </Link>
          </h3>
          <p className="text-black">
            We're here to help you improve your vocabulary and learn new
            languages.
          </p>
        </div>

        <div className="grid grid-cols-2 text-black gap-4">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-black hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="text-black hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="text-black hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-black hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/help" className="text-black hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md text-black"
            />
            <button className="bg-purple-600 text-white px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-blue-500 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-black">
          © 2024 Waseque Arafat || All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
