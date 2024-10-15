import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiHuawei } from "react-icons/si";
import qr from "../assets/images/qr.png";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center border-y py-8 gap-y-4">
        <div className="flex flex-wrap justify-between w-1/2 gap-y-4">
          <div>
            <h3 className="text-secondary mb-3">Company</h3>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Media about us</li>
              <li>Points of delivery</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-secondary mb-3">For customers</h3>
            <ul>
              <li>Contacts us</li>
              <li>Retur</li>
              <li>How to pay</li>
              <li>Delivery</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-secondary mb-3">Partners</h3>
            <ul>
              <li>Sign in</li>
              <li>Become a partner</li>
              <li>Turnkey brand</li>
              <li>Open a delivery point</li>
              <li>Logistics</li>
            </ul>
          </div>
        </div>
        <div className="bg-backgound w-80 h-40 flex p-5 rounded-md">
          <img src={qr} alt="" className="h-full mr-4" />
          <div className="flex flex-col justify-between">
            <h4 className="font-primarySemiBold">ESTORE App</h4>
            <p className="text-secondary">
              Hover the camera to download the app
            </p>
            <div className="flex w-full">
              <div className="bg-black p-1 rounded-lg mr-2">
                <FaApple size={30} color="white" />
              </div>
              <div className="bg-black p-1 rounded-lg mr-2">
                <IoLogoGooglePlaystore size={30} color="white" />
              </div>
              <div className="bg-black p-1 rounded-lg">
                <SiHuawei size={30} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-secondary">&copy; 2024 ESTORE</p>
        <div className="flex flex-wrap gap-y-2">
          <FaFacebook size={25} className="mx-1" />
          <FaInstagram size={25} className="mx-1" />
          <FaYoutube size={25} className="mx-1" />
          <FaXTwitter size={25} className="mx-1" />
          <FaLinkedin size={25} className="mx-1" />
        </div>
        <div className="flex text-secondary">
          <p className="mr-4">All rights reserved</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </div>
  );
}
