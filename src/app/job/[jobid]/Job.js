"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiMapPin, FiClock, FiUsers, FiMessageSquare } from 'react-icons/fi';
import useJobStore from '@/app/store/jobStore';
import { PiBuildingOffice } from "react-icons/pi";
import { RiGovernmentLine } from "react-icons/ri";
import { FcOrganization } from "react-icons/fc";
import { FaPerson } from "react-icons/fa6";
import { FiCopy } from 'react-icons/fi';
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { ClipLoader } from 'react-spinners';

const Job = ({ params, job }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  let formattedDate = '';
  const { setJob } = useJobStore();

  if (job && typeof job === 'object' && job.createdAt) {
    const date = new Date(job.createdAt);
    formattedDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    }).format(date);
  }


  const handleNavigation = () => {
    setLoading(true)
    // Set the job in the Zustand store
    setJob(job);
    // Navigate to edit_job page
    router.push('/edit_job');
  };
  const contactJobProvider = async () => {
    try {
      if (job.modeOfMessage === "whatsapp") {
        window.open(`https://wa.me/${job.posterNumber}?text=Hi,%20I%20am%20interested%20in%20your%20job. www.getmee.in`, '_blank');
      } else if (job.modeOfMessage === "call") {
        window.open(`tel:${job.posterNumber}`);
      } else {
        const email = `mailto:${job.posterEmail}?subject=Job%20Application&body=Hello,%20I%20am%20interested%20in%20your%20job.`;
        window.open(email, '_blank');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  

  const applyJob = async () => {
    try {
      if (job.jobApplyingMode === "whatsapp") {
        // Open WhatsApp in a new tab
        window.open(`https://wa.me/${job.posterNumber}?text=Hello,%20I%20am%20interested%20in%20your%20job. www.getmee.in`, '_blank');
      } else {
        // Open form submission URL in a new tab
        window.open(`${job.formSubmissionPath}`, '_blank');
      }
    } catch (error) {
      alert(error.message);
    }
  };



  const shareUrl = 'https://www.getmee.in/job/' + job._id; // Example URL

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  if (typeof job === 'string') {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">
          <BsFillEmojiDizzyFill className="text-9xl text-green-700 w-screen mb-7" />
          <h1>{job}</h1>
        </div>
      </div>

    )
  }
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-cover bg-center" style={{ minHeight: '50vh', backgroundImage: `url(${job.image})` }}>

        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="flex justify-between items-center p-4 text-white">
            <FiArrowLeft onClick={() => router.back()} className="text-2xl" />
            {/* <div className="flex space-x-4">
              <FiBookmark className="text-2xl" />
              <IoIosShareAlt className="text-2xl" onClick={() => setIsPopupOpen(!isPopupOpen)} />
            </div> */}
          </div>
        </div>
      </div>

      {/* Job Title Section */}
      <div className="px-4 py-6 bg-white">
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        <div className="flex items-center text-gray-600 mb-1">
          {job.offerBy === "government" ? (
            <RiGovernmentLine className="mr-1" />
          ) : job.offerBy === "organization" ? (
            <FcOrganization className="mr-1" />
          ) : job.offerBy === "enterprise" ? (
            <FaShop className="mr-1" />
          ) : (
            <FaPerson className="mr-1" />
          )}
          <span className="mr-2">{job.poster}</span>
        </div>

        <div className="flex items-center text-green-600">
          <MdOutlineCategory className="mr-1" />
          <span>
            {job.offerBy === "government" ? "Government Sector" : "Private Sector"}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <FiMapPin className="mr-1" />
          <span>
            {job.location.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <FiClock className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <PiBuildingOffice className="mr-1" />
          <span>{job.type}</span>
        </div>
        {job && job.negotiation === true && (
          <div className="inline-flex items-center text-white bg-green-500 p-2 rounded-lg">
            <span>Salary/Price Negotiable</span>
          </div>

        )}

      </div>

      {/* Job Summary Section */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between">
          <div className="flex items-center">
            <h1 className="text-green-600 mr-2">₹</h1>
            {job.payRate ? (
               <span className="font-semibold">{job.payRate}/{job.payType}</span>
            ) : (
              <span className="font-semibold">{job.payRateInWord}/{job.payType}</span>
            )}
          </div>
          <div className="flex items-center">
            <FiUsers className="text-blue-600 mr-2" />
            <span> People apply</span>
          </div>
        </div>
      </div>

      {/* Job Detail Section */}
      <div className="px-4 py-4 bg-white">
        <h2 className="text-xl font-bold mb-2">Job Detail</h2>

        {job.experience && job.experience !== "not applicable" && (
          <p className="text-gray-700 flex items-start">
            <h3 className="text-black font-bold text-lg">Experience</h3>:
            <span style={{ whiteSpace: 'pre-line', marginLeft: '0.5rem' }}>
              {job.experience.split(/(\d\.)/).length > 1
                ? job.experience.split(/(\d\.)/).map((part, index) =>
                  index % 2 === 0 ? '' : `${part} ${job.experience.split(/(\d\.)/)[index + 1]}\n`
                )
                : job.experience}
            </span>
          </p>
        )}

        {job.qualification && job.qualification !== "not applicable" && (
          <p className="text-gray-700 flex items-start">
            <h3 className="text-black font-bold text-lg">Qualification</h3>:
            <span style={{ whiteSpace: 'pre-line', marginLeft: '0.5rem' }}>
              {job.qualification.split(/(\d\.)/).length > 1
                ? job.qualification.split(/(\d\.)/).map((part, index) =>
                  index % 2 === 0 ? '' : `${part} ${job.qualification.split(/(\d\.)/)[index + 1]}\n`
                )
                : job.qualification}
            </span>
          </p>
        )}


        <p
          className="text-gray-700 mt-16"
          dangerouslySetInnerHTML={{ __html: job.description.replace(/\n/g, '<br />') }}
        ></p>

      </div>

      {/* Footer */}
      <div className="bg-gray-200 text-black py-6 mb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Links Section */}
            <div className="space-y-2 mb-4 md:mb-0 md:space-x-6 md:flex md:space-y-0">
              <a href="/privacy_policy" className="text-black hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="/about_us" className="text-black hover:text-green-500 transition-colors">About Us</a>
              <a href="/terms_conditions" className="text-black hover:text-green-500 transition-colors">Terms & Conditions</a>
              <a href="mailto:getmeecares@gmail.com" className="text-black hover:text-green-500 transition-colors">
                Contact Us
              </a>

            </div>

            {/* Social Links Section */}
            <div className="space-y-2 md:space-x-6 md:flex md:space-y-0">
              <a href="https://www.facebook.com/people/Getmee/61565864408228/?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500 transition-colors">Facebook</a>
              <a href="https://www.instagram.com/getmee2024?igsh=ZGkxMmxjamE3Y3Jm" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500 transition-colors">Instagram</a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500 transition-colors">Telegram</a>
            </div>
          </div>
          <div className="mt-4 text-center text-black">
            © 2024 www.getmee.in. All rights reserved.
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between">
      <button
      onClick={handleNavigation}
      className="bg-black text-white px-6 py-2 rounded-full flex items-center"
    >
      <CiEdit className="mr-2" />
      {loading ? <ClipLoader color="#fff" loading={loading} size={30} /> : "Edit"}
    </button>
        {job.modeOfMessage.length > 0 ? (
          <button onClick={() => contactJobProvider()} className="bg-black text-white px-6 py-2 rounded-full flex items-center">
            <FiMessageSquare className="mr-2" />
            Message
          </button>
        ) : (
          <div></div>
        )}
        {(job.formSubmissionPath?.length > 0 || job.jobApplyingMode === "whatsapp") ? (
          <button onClick={() => applyJob()} className="bg-green-600 text-white px-6 py-2 rounded-full">
            Apply this job
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Job;

