'use client';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import {FaMapLocationDot, FaMapMarked} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-5" id="contact">
        <h3 className="pb-5 text-blue-600 font-semibold text-2xl">Contact</h3>
        <h2 className="text-gray-900 font-semibold text-3xl">Dont be shy! Hit me up! 👇</h2>
        <div className="flex gap-5 flex-wrap">
        <div className="flex items-center mt-5 gap-4 shadow-xl w-fit p-5 border-2 border-blue-300">
        <FaMapMarked className="text-4xl text-blue-600" />
          <div><h2 className="text-xl font-semibold">Location</h2><p className="font-medium text-lg">Dhaka, Bangladesh</p></div>
        </div>
        <div className="flex items-center mt-5 gap-4 shadow-xl w-fit p-5 border-2 border-blue-300">
        <AiOutlineMail className="text-4xl text-red-600" />
          <div><h2 className="text-xl font-semibold">Mail</h2><p className="font-medium text-lg">shakilhossain1007@gmail.com</p></div>
        </div>
        <div className="flex items-center mt-5 gap-4 shadow-xl w-fit p-5 border-2 border-blue-300">
        <BsFillTelephoneFill className="text-4xl text-green-700" />
          <div><h2 className="text-xl font-semibold">Phone Call</h2><p className="font-medium text-lg">(+88) 01609317035</p></div>
        </div>
        </div>
    </div>
  )
}
export default Contact;