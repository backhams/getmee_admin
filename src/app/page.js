"use client"
import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaFileAlt, FaUser, FaPhone, FaEnvelope, FaComments, FaLocationArrow, FaList, FaImage, FaBriefcase, FaGraduationCap, FaUserTie, FaUsers, FaHandshake, FaUserPlus, FaCalendarAlt } from "react-icons/fa";

const JobPostingForm = () => {
  const [loading,setLoading] = useState(false);
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
      console.log(formData)
      setLoading(true)
      const response = await fetch(`${api}/postJob`,{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({formData})
      })
      const data = await response.json();
      if(response.ok){
        alert(data.message)
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
            <select
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              <option value="painter">Painter</option>
              <option value="peon">Peon</option>
              <option value="gardener">Gardener</option>
              <option value="web developer">Web Developer</option>
              <option value="graphic designer">Graphic Designer</option>
              <option value="cleaner">Cleaner</option>
              <option value="driver">Driver</option>
              <option value="chef">Chef</option>
              <option value="electrician">Electrician</option>
              <option value="carpenter">Carpenter</option>
              <option value="delivery driver">Delivery Driver</option>
              <option value="plumber">Plumber</option>
              <option value="mechanic">Mechanic</option>
              <option value="security guard">Security Guard</option>
              <option value="housekeeper">Housekeeper</option>
              <option value="receptionist">Receptionist</option>
              <option value="babysitter">Babysitter</option>
              <option value="waiter">Waiter</option>
              <option value="bartender">Bartender</option>
              <option value="cashier">Cashier</option>
              <option value="shop assistant">Shop Assistant</option>
              <option value="construction worker">Construction Worker</option>
              <option value="salesperson">Salesperson</option>
              <option value="office assistant">Office Assistant</option>
              <option value="customer service representative">Customer Service Representative</option>
              <option value="warehouse worker">Warehouse Worker</option>
              <option value="courier">Courier</option>
              <option value="nurse">Nurse</option>
              <option value="pharmacy assistant">Pharmacy Assistant</option>
              <option value="janitor">Janitor</option>
              <option value="laundry attendant">Laundry Attendant</option>
              <option value="personal trainer">Personal Trainer</option>
              <option value="fitness instructor">Fitness Instructor</option>
              <option value="gym trainer">Gym Trainer</option>
              <option value="telemarketer">Telemarketer</option>
              <option value="bookkeeper">Bookkeeper</option>
              <option value="tailor">Tailor</option>
              <option value="mason">Mason</option>
              <option value="house painter">House Painter</option>
              <option value="taxi driver">Taxi Driver</option>
              <option value="bus driver">Bus Driver</option>
              <option value="truck driver">Truck Driver</option>
              <option value="forklift operator">Forklift Operator</option>
              <option value="veterinary assistant">Veterinary Assistant</option>
              <option value="pest control technician">Pest Control Technician</option>
              <option value="florist">Florist</option>
              <option value="photographer">Photographer</option>
              <option value="hair stylist">Hair Stylist</option>
              <option value="barber">Barber</option>
              <option value="makeup artist">Makeup Artist</option>
              <option value="manicurist">Manicurist</option>
              <option value="pedicurist">Pedicurist</option>
              <option value="beauty therapist">Beauty Therapist</option>
              <option value="massage therapist">Massage Therapist</option>
              <option value="physical therapist assistant">Physical Therapist Assistant</option>
              <option value="dental assistant">Dental Assistant</option>
              <option value="lab technician">Lab Technician</option>
              <option value="phlebotomist">Phlebotomist</option>
              <option value="radiologic technologist">Radiologic Technologist</option>
              <option value="pharmacy technician">Pharmacy Technician</option>
              <option value="medical secretary">Medical Secretary</option>
              <option value="hospital cleaner">Hospital Cleaner</option>
              <option value="dietary aide">Dietary Aide</option>
              <option value="nursing assistant">Nursing Assistant</option>
              <option value="childcare worker">Childcare Worker</option>
              <option value="preschool teacher">Preschool Teacher</option>
              <option value="teacher assistant">Teacher Assistant</option>
              <option value="teacher">Teacher</option>
              <option value="tutor">Tutor</option>
              <option value="librarian assistant">Librarian Assistant</option>
              <option value="bus monitor">Bus Monitor</option>
              <option value="event planner">Event Planner</option>
              <option value="caterer">Caterer</option>
              <option value="wedding coordinator">Wedding Coordinator</option>
              <option value="sound technician">Sound Technician</option>
              <option value="stagehand">Stagehand</option>
              <option value="lighting technician">Lighting Technician</option>
              <option value="audio engineer">Audio Engineer</option>
              <option value="film editor">Film Editor</option>
              <option value="camera operator">Camera Operator</option>
              <option value="video production assistant">Video Production Assistant</option>
              <option value="tv production assistant">TV Production Assistant</option>
              <option value="radio host">Radio Host</option>
              <option value="dj">Disc Jockey (DJ)</option>
              <option value="sound designer">Sound Designer</option>
              <option value="graphic artist">Graphic Artist</option>
              <option value="print designer">Print Designer</option>
              <option value="interior designer">Interior Designer</option>
              <option value="architectural drafter">Architectural Drafter</option>
              <option value="cad technician">CAD Technician</option>
              <option value="surveyor">Surveyor</option>
              <option value="civil engineer technician">Civil Engineer Technician</option>
              <option value="architect assistant">Architect Assistant</option>
              <option value="landscape architect">Landscape Architect</option>
              <option value="real estate agent">Real Estate Agent</option>
              <option value="property manager">Property Manager</option>
              <option value="leasing consultant">Leasing Consultant</option>
              <option value="appraiser">Appraiser</option>
              <option value="mortgage broker">Mortgage Broker</option>
              <option value="title examiner">Title Examiner</option>
              <option value="loan officer">Loan Officer</option>
              <option value="financial advisor">Financial Advisor</option>
              <option value="insurance agent">Insurance Agent</option>
              <option value="claims adjuster">Claims Adjuster</option>
              <option value="accountant">Accountant</option>
              <option value="auditor">Auditor</option>
              <option value="financial analyst">Financial Analyst</option>
              <option value="tax preparer">Tax Preparer</option>
              <option value="budget analyst">Budget Analyst</option>
              <option value="market research analyst">Market Research Analyst</option>
              <option value="human resources assistant">Human Resources Assistant</option>
              <option value="recruitment consultant">Recruitment Consultant</option>
              <option value="training coordinator">Training Coordinator</option>
              <option value="executive assistant">Executive Assistant</option>
              <option value="administrative assistant">Administrative Assistant</option>
              <option value="secretary">Secretary</option>
              <option value="data entry clerk">Data Entry Clerk</option>
              <option value="office manager">Office Manager</option>
              <option value="legal assistant">Legal Assistant</option>
              <option value="paralegal">Paralegal</option>
              <option value="court clerk">Court Clerk</option>
              <option value="litigation assistant">Litigation Assistant</option>
              <option value="real estate assistant">Real Estate Assistant</option>
              <option value="compliance officer">Compliance Officer</option>
              <option value="it support specialist">IT Support Specialist</option>
              <option value="systems administrator">Systems Administrator</option>
              <option value="network technician">Network Technician</option>
              <option value="database administrator">Database Administrator</option>
              <option value="it consultant">IT Consultant</option>
              <option value="help desk technician">Help Desk Technician</option>
              <option value="technical support specialist">Technical Support Specialist</option>
              <option value="software developer">Software Developer</option>
              <option value="junior developer">Junior Developer</option>
              <option value="qa tester">QA Tester</option>
              <option value="ux researcher">UX Researcher</option>
              <option value="website tester">Website Tester</option>
              <option value="website content manager">Website Content Manager</option>
              <option value="seo content writer">SEO Content Writer</option>
              <option value="content reviewer">Content Reviewer</option>
              <option value="proofreader">Proofreader</option>
              <option value="book editor">Book Editor</option>
              <option value="note taker">Note Taker</option>
              <option value="school project assistant">School Project Assistant</option>
              <option value="college project assistant">College Project Assistant</option>
            </select>

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
