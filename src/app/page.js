"use client"
import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaFileAlt, FaUser, FaPhone, FaEnvelope, FaComments, FaLocationArrow, FaList, FaImage, FaBriefcase, FaGraduationCap, FaUserTie, FaUsers, FaHandshake, FaUserPlus, FaCalendarAlt } from "react-icons/fa";
import Select from 'react-select';

const JobPostingForm = () => {
  const [loading, setLoading] = useState(false);
  const api = process.env.API_ENDPOINT
  const [formData, setFormData] = useState({
    title: "",
    poster: "",
    posterNumber: "",
    posterEmail: "",
    modeOfMessage: "",
    location: "",
    locality: "",
    category: "",
    payRate: "",
    payType: "",
    image: "",
    type: "",
    description: "",
    experience: "",
    qualification: "",
    shortDescription: "",
    appliersCount: 0,
    negotiation: false,
    jobApplyingMode: "",
    formSubmissionPath: "",
    offerBy: "",
    posterDuration: 1
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await fetch(`${api}/postJob`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData })
      })
      const data = await response.json();
      if (response.ok) {
        alert(data.message)
        setLoading(false)
        // Reset form fields here
        setFormData({
          title: "",
          poster: "",
          posterNumber: "",
          posterEmail: "",
          modeOfMessage: "",
          location: "",
          locality: "",
          category: "",
          payRate: "",
          payType: "",
          image: "",
          type: "",
          description: "",
          experience: "",
          qualification: "",
          shortDescription: "",
          appliersCount: 0,
          negotiation: false,
          jobApplyingMode: "",
          formSubmissionPath: "",
          offerBy: "",
          posterDuration: 1
        });
      } else {
        setLoading(false)
        alert(data.message)
      }
    } catch (error) {
      setLoading(false)
      alert(error.message)
    }
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };
  const options = [
    { value: 'painter', label: 'Painter' },
    { value: 'peon', label: 'Peon' },
    { value: 'gardener', label: 'Gardener' },
    { value: 'web developer', label: 'Web Developer' },
    { value: 'graphic designer', label: 'Graphic Designer' },
    { value: 'cleaner', label: 'Cleaner' },
    { value: 'driver', label: 'Driver' },
    { value: 'chef', label: 'Chef' },
    { value: 'electrician', label: 'Electrician' },
    { value: 'carpenter', label: 'Carpenter' },
    { value: 'delivery driver', label: 'Delivery Driver' },
    { value: 'plumber', label: 'Plumber' },
    { value: 'mechanic', label: 'Mechanic' },
    { value: 'security guard', label: 'Security Guard' },
    { value: 'housekeeper', label: 'Housekeeper' },
    { value: 'receptionist', label: 'Receptionist' },
    { value: 'babysitter', label: 'Babysitter' },
    { value: 'waiter', label: 'Waiter' },
    { value: 'bartender', label: 'Bartender' },
    { value: 'cashier', label: 'Cashier' },
    { value: 'shop assistant', label: 'Shop Assistant' },
    { value: 'construction worker', label: 'Construction Worker' },
    { value: 'salesperson', label: 'Salesperson' },
    { value: 'office assistant', label: 'Office Assistant' },
    { value: 'customer service representative', label: 'Customer Service Representative' },
    { value: 'warehouse worker', label: 'Warehouse Worker' },
    { value: 'courier', label: 'Courier' },
    { value: 'nurse', label: 'Nurse' },
    { value: 'pharmacy assistant', label: 'Pharmacy Assistant' },
    { value: 'janitor', label: 'Janitor' },
    { value: 'laundry attendant', label: 'Laundry Attendant' },
    { value: 'personal trainer', label: 'Personal Trainer' },
    { value: 'fitness instructor', label: 'Fitness Instructor' },
    { value: 'gym trainer', label: 'Gym Trainer' },
    { value: 'telemarketer', label: 'Telemarketer' },
    { value: 'bookkeeper', label: 'Bookkeeper' },
    { value: 'tailor', label: 'Tailor' },
    { value: 'mason', label: 'Mason' },
    { value: 'house painter', label: 'House Painter' },
    { value: 'taxi driver', label: 'Taxi Driver' },
    { value: 'bus driver', label: 'Bus Driver' },
    { value: 'truck driver', label: 'Truck Driver' },
    { value: 'forklift operator', label: 'Forklift Operator' },
    { value: 'veterinary assistant', label: 'Veterinary Assistant' },
    { value: 'pest control technician', label: 'Pest Control Technician' },
    { value: 'florist', label: 'Florist' },
    { value: 'photographer', label: 'Photographer' },
    { value: 'hair stylist', label: 'Hair Stylist' },
    { value: 'barber', label: 'Barber' },
    { value: 'makeup artist', label: 'Makeup Artist' },
    { value: 'manicurist', label: 'Manicurist' },
    { value: 'pedicurist', label: 'Pedicurist' },
    { value: 'beauty therapist', label: 'Beauty Therapist' },
    { value: 'massage therapist', label: 'Massage Therapist' },
    { value: 'physical therapist assistant', label: 'Physical Therapist Assistant' },
    { value: 'dental assistant', label: 'Dental Assistant' },
    { value: 'lab technician', label: 'Lab Technician' },
    { value: 'phlebotomist', label: 'Phlebotomist' },
    { value: 'radiologic technologist', label: 'Radiologic Technologist' },
    { value: 'pharmacy technician', label: 'Pharmacy Technician' },
    { value: 'medical secretary', label: 'Medical Secretary' },
    { value: 'hospital cleaner', label: 'Hospital Cleaner' },
    { value: 'dietary aide', label: 'Dietary Aide' },
    { value: 'nursing assistant', label: 'Nursing Assistant' },
    { value: 'childcare worker', label: 'Childcare Worker' },
    { value: 'preschool teacher', label: 'Preschool Teacher' },
    { value: 'teacher assistant', label: 'Teacher Assistant' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'tutor', label: 'Tutor' },
    { value: 'librarian assistant', label: 'Librarian Assistant' },
    { value: 'bus monitor', label: 'Bus Monitor' },
    { value: 'event planner', label: 'Event Planner' },
    { value: 'caterer', label: 'Caterer' },
    { value: 'wedding coordinator', label: 'Wedding Coordinator' },
    { value: 'sound technician', label: 'Sound Technician' },
    { value: 'stagehand', label: 'Stagehand' },
    { value: 'lighting technician', label: 'Lighting Technician' },
    { value: 'audio engineer', label: 'Audio Engineer' },
    { value: 'film editor', label: 'Film Editor' },
    { value: 'camera operator', label: 'Camera Operator' },
    { value: 'video production assistant', label: 'Video Production Assistant' },
    { value: 'tv production assistant', label: 'TV Production Assistant' },
    { value: 'radio host', label: 'Radio Host' },
    { value: 'dj', label: 'Disc Jockey (DJ)' },
    { value: 'sound designer', label: 'Sound Designer' },
    { value: 'graphic artist', label: 'Graphic Artist' },
    { value: 'print designer', label: 'Print Designer' },
    { value: 'interior designer', label: 'Interior Designer' },
    { value: 'architectural drafter', label: 'Architectural Drafter' },
    { value: 'cad technician', label: 'CAD Technician' },
    { value: 'surveyor', label: 'Surveyor' },
    { value: 'civil engineer technician', label: 'Civil Engineer Technician' },
    { value: 'architect assistant', label: 'Architect Assistant' },
    { value: 'landscape architect', label: 'Landscape Architect' },
    { value: 'real estate agent', label: 'Real Estate Agent' },
    { value: 'property manager', label: 'Property Manager' },
    { value: 'leasing consultant', label: 'Leasing Consultant' },
    { value: 'appraiser', label: 'Appraiser' },
    { value: 'mortgage broker', label: 'Mortgage Broker' },
    { value: 'title examiner', label: 'Title Examiner' },
    { value: 'loan officer', label: 'Loan Officer' },
    { value: 'financial advisor', label: 'Financial Advisor' },
    { value: 'insurance agent', label: 'Insurance Agent' },
    { value: 'claims adjuster', label: 'Claims Adjuster' },
    { value: 'accountant', label: 'Accountant' },
    { value: 'auditor', label: 'Auditor' },
    { value: 'financial analyst', label: 'Financial Analyst' },
    { value: 'tax preparer', label: 'Tax Preparer' },
    { value: 'budget analyst', label: 'Budget Analyst' },
    { value: 'market research analyst', label: 'Market Research Analyst' },
    { value: 'human resources assistant', label: 'Human Resources Assistant' },
    { value: 'recruitment consultant', label: 'Recruitment Consultant' },
    { value: 'training coordinator', label: 'Training Coordinator' },
    { value: 'executive assistant', label: 'Executive Assistant' },
    { value: 'administrative assistant', label: 'Administrative Assistant' },
    { value: 'secretary', label: 'Secretary' },
    { value: 'data entry clerk', label: 'Data Entry Clerk' },
    { value: 'office manager', label: 'Office Manager' },
    { value: 'legal assistant', label: 'Legal Assistant' },
    { value: 'paralegal', label: 'Paralegal' },
    { value: 'court clerk', label: 'Court Clerk' },
    { value: 'litigation support specialist', label: 'Litigation Support Specialist' },
    { value: 'legal secretary', label: 'Legal Secretary' },
    { value: 'customer service assistant', label: 'Customer Service Assistant' },
    { value: 'call center operator', label: 'Call Center Operator' },
    { value: 'technical support specialist', label: 'Technical Support Specialist' },
    { value: 'help desk technician', label: 'Help Desk Technician' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
              <FaFileAlt className="inline mr-2" />Job Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              disabled={loading}
              value={formData.title}
              placeholder="Senior Software developer"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="poster">
              <FaUser className="inline mr-2" />Poster *
            </label>
            <input
              type="text"
              id="poster"
              name="poster"
              required
              disabled={loading}
              value={formData.poster}
              placeholder="person , company or government department name"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="posterNumber">
              <FaPhone className="inline mr-2" />Poster Number
            </label>
            <input
              type="tel"
              id="posterNumber"
              name="posterNumber"
              required={formData.jobApplyingMode === "whatsapp" || formData.modeOfMessage === "whatsapp"}
              placeholder="Include country code also"
              value={formData.posterNumber}
              disabled={loading}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="posterEmail">
              <FaEnvelope className="inline mr-2" />Poster Email
            </label>
            <input
              type="email"
              id="posterEmail"
              name="posterEmail"
              disabled={loading}
              required={formData.modeOfMessage === "email" ? true : false}
              value={formData.posterEmail}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="modeOfMessage">
              <FaComments className="inline mr-2" />Mode of Message
            </label>
            <select
              id="modeOfMessage"
              name="modeOfMessage"
              value={formData.modeOfMessage}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a mode</option>
              <option value="email">Email</option>
              <option value="whatsapp">Whatsapp</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">
              <FaMapMarkerAlt className="inline mr-2" />Location *
            </label>
            <select
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Location</option>
              <option value="aizawl mizoram">Aizawl, Mizoram</option>
              <option value="lunglei mizoram">Lunglei, Mizoram</option>
              <option value="champhai mizoram">Champhai, Mizoram</option>
              <option value="serchhip mizoram">Serchhip, Mizoram</option>
              <option value="kolasib mizoram">Kolasib, Mizoram</option>
              <option value="mamit mizoram">Mamit, Mizoram</option>
              <option value="saiha mizoram">Saiha, Mizoram</option>
              <option value="lawngtlai mizoram">Lawngtlai, Mizoram</option>
              <option value="saitual mizoram">Saitual, Mizoram</option>
              <option value="khawzawl mizoram">Khawzawl, Mizoram</option>
              <option value="hnahthial mizoram">Hnahthial, Mizoram</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="locality">
              <FaLocationArrow className="inline mr-2" />Locality (Optional)
            </label>
            <input
              type="text"
              id="locality"
              name="locality"
              placeholder="aizawl,mizoram mission veng etc"
              value={formData.locality}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">
              <FaList className="inline mr-2" />Category *
            </label>
            <Select
              id="category"
              name="category"
              isDisabled={loading}
              required
              options={options}
              value={options.find(option => option.value === formData.category)}
              onChange={(selectedOption) => setFormData(prevState => ({
                ...prevState,
                category: selectedOption ? selectedOption.value : ''
              }))}
              placeholder="Select a category"
              className="w-full"
            />


          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="payRate">
              <FaMoneyBillWave className="inline mr-2" />Pay Rate *
            </label>
            <input
              type="number"
              id="payRate"
              name="payRate"
              required
              value={formData.payRate}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="payType">
              <FaClock className="inline mr-2" />Pay Type *
            </label>
            <select
              id="payType"
              name="payType"
              required
              value={formData.payType}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select pay type</option>
              <option value="hourly">Hourly</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image">
              <FaImage className="inline mr-2" />Image URL *
            </label>
            <input
              type="url"
              id="image"
              name="image"
              required
              value={formData.image}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="type">
              <FaBriefcase className="inline mr-2" />Job Type *
            </label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select job type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="freelance">Freelance</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
            <FaFileAlt className="inline mr-2" />Job Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            disabled={loading}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="experience">
              <FaUserTie className="inline mr-2" />Experience (Optional)
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              placeholder="1-3 years etc"
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="qualification">
              <FaGraduationCap className="inline mr-2" />Qualification (Optional)
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              placeholder="B.Tech Graduate etc"
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="shortDescription">
            <FaFileAlt className="inline mr-2" />Short Description *
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            required
            value={formData.shortDescription}
            onChange={handleInputChange}
            disabled={loading}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="negotiation"
              name="negotiation"
              checked={formData.negotiation}
              onChange={handleInputChange}
              disabled={loading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="negotiation" className="ml-2 block text-sm text-gray-900">
              <FaHandshake className="inline mr-2" />Negotiation
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="jobApplyingMode">
              <FaUserPlus className="inline mr-2" />Job Applying Mode *
            </label>
            <select
              id="jobApplyingMode"
              name="jobApplyingMode"
              required
              value={formData.jobApplyingMode}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select job aaplying Mode</option>
              <option value="whatsapp">Whatsapp</option>
              <option value="website">Website</option>
              <option value="instagram">Instagram</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="formSubmissionPath">
              <FaFileAlt className="inline mr-2" />Form Submission Path (if only Website or Instagram)
            </label>
            <input
              type="text"
              id="formSubmissionPath"
              name="formSubmissionPath"
              required={formData.jobApplyingMode !== "whatsapp" ? true : false}
              placeholder="https://www.example.com/job_apply_form"
              value={formData.formSubmissionPath}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="offerBy">
              <FaBuilding className="inline mr-2" />Offered By *
            </label>
            <select
              id="offerBy"
              name="offerBy"
              required
              value={formData.offerBy}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Who Offfering Job</option>
              <option value="government">Government</option>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="posterDuration">
              <FaCalendarAlt className="inline mr-2" />Poster Duration (days) *
            </label>
            <input
              type="number"
              id="posterDuration"
              name="posterDuration"
              required
              value={formData.posterDuration}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            disabled={loading ? true : false}
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {`${loading ? "Posting Job ..." : "Post Job"}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;
