"use client"
import React, { useState,useEffect } from "react";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaFileAlt, FaUser, FaPhone, FaEnvelope, FaComments, FaLocationArrow, FaList, FaImage, FaBriefcase, FaGraduationCap, FaUserTie, FaUsers, FaHandshake, FaUserPlus, FaCalendarAlt } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import Select from 'react-select';
import Link from 'next/link';
import useJobStore from '@/app/store/jobStore';
import { useRouter } from "next/navigation";
const EditJob = () => {
    const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { job } = useJobStore();
  useEffect(() => {
    if (!job) {
      // Handle case where no job is present (e.g., redirect to a different page)
    }
  }, [job]);

  if (!job) {
    return <p>No job to edit</p>;
  }
  const api = process.env.API_ENDPOINT
  const [formData, setFormData] = useState({
    title: job.title,
    poster: job.poster,
    posterNumber: job.posterNumber,
    posterEmail: job.posterEmail,
    modeOfMessage: job.modeOfMessage,
    location: job.location,
    locality: job.locality,
    category: job.category,
    payRate: job.payRate,
    payType: job.payType,
    image: job.image,
    type: job.type,
    description: job.description,
    experience: job.experience,
    qualification: job.qualification,
    shortDescription: job.shortDescription,
    appliersCount: job.appliersCount,
    negotiation: job.negotiation,
    visibility: job.visibility,
    jobApplyingMode: job.jobApplyingMode,
    formSubmissionPath: job.formSubmissionPath,
    offerBy: job.offerBy,
    posterDuration: job.posterDuration
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
      const response = await fetch(`${api}/updateJob`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData,jobId:job._id })
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
          payRateInWord: "",
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
        // Redirect to the new page
        router.push("/joblists/All/All");
        
        // Reload the new page after a slight delay
        setTimeout(() => {
          window.location.reload(); // Reload the new page
        }, 1000); // Delay for 1sec to ensure the route has changed
      } else {
        setLoading(false)
        alert(data.message)
      }
    } catch (error) {
      setLoading(false)
      alert(error.message)
    }
    console.log("Form submitted");
    // Here you would typically send the data to your backend
  };
  const openSettings = async () =>{
    try {
      
    } catch (error) {
      alert(error.message)
    }
  }
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
    { value: 'hair Stylist', label: 'Hair Stylist' },
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
    { value: 'computer operator', label: 'Computer Operator' },
    { value: 'video production assistant', label: 'Video Production Assistant' },
    { value: 'tV production assistant', label: 'TV Production Assistant' },
    { value: 'Radio Host', label: 'Radio Host' },
    { value: 'disc jockey', label: 'Disc Jockey (DJ)' },
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
    { value: 'town planner', label: 'Town Planner' },
    { value: 'urban designer', label: 'Urban Designer' },
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
    { value: 'account assistant', label: 'Account Assistant' },
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
    { value: 'litigation assistant', label: 'Litigation Assistant' },
    { value: 'real Estate assistant', label: 'Real Estate Assistant' },
    { value: 'compliance officer', label: 'Compliance Officer' },
    { value: 'it support specialist', label: 'IT Support Specialist' },
    { value: 'systems administrator', label: 'Systems Administrator' },
    { value: 'network technician', label: 'Network Technician' },
    { value: 'database administrator', label: 'Database Administrator' },
    { value: 'it consultant', label: 'IT Consultant' },
    { value: 'help desk technician', label: 'Help Desk Technician' },
    { value: 'technical support specialist', label: 'Technical Support Specialist' },
    { value: 'software developer', label: 'Software Developer' },
    { value: 'junior developer', label: 'Junior Developer' },
    { value: 'qa tester', label: 'QA Tester' },
    { value: 'ux researcher', label: 'UX Researcher' },
    { value: 'website tester', label: 'Website Tester' },
    { value: 'website content manager', label: 'Website Content Manager' },
    { value: 'seo content writer', label: 'SEO Content Writer' },
    { value: 'content reviewer', label: 'Content Reviewer' },
    { value: 'proofreader', label: 'Proofreader' },
    { value: 'book editor', label: 'Book Editor' },
    { value: 'note taker', label: 'Note Taker' },
    { value: 'school project assistant', label: 'School Project Assistant' },
    { value: 'academic research assistant', label: 'Academic Research Assistant' },
    { value: 'lab assistant', label: 'Lab Assistant' },
    { value: 'field researcher', label: 'Field Researcher' },
    { value: 'data analyst', label: 'Data Analyst' },
    { value: 'statistical analyst', label: 'Statistical Analyst' },
    { value: 'surveyor assistant', label: 'Surveyor Assistant' },
    { value: 'transcriptionist', label: 'Transcriptionist' },
    { value: 'virtual assistant', label: 'Virtual Assistant' },
    { value: 'personal shopper', label: 'Personal Shopper' },
    { value: 'errand runner', label: 'Errand Runner' },
    { value: 'gift wrapper', label: 'Gift Wrapper' },
    { value: 'handyman', label: 'Handyman' },
    { value: 'interior decorator', label: 'Interior Decorator' },
    { value: 'pet sitter', label: 'Pet Sitter' },
    { value: 'dog walker', label: 'Dog Walker' },
    { value: 'farmhand', label: 'Farmhand' },
    { value: 'ranch worker', label: 'Ranch Worker' },
    { value: 'nursery worker', label: 'Nursery Worker' },
    { value: 'greenhouse assistant', label: 'Greenhouse Assistant' },
    { value: 'landscaper', label: 'Landscaper' },
    { value: 'arborist', label: 'Arborist' },
    { value: 'groundskeeper', label: 'Groundskeeper' },
    { value: 'park ranger', label: 'Park Ranger' },
    { value: 'maintenance worker', label: 'Maintenance Worker' },
    { value: 'factory worker', label: 'Factory Worker' },
    { value: 'machine operator', label: 'Machine Operator' },
    { value: 'assembler', label: 'Assembler' },
    { value: 'production worker', label: 'Production Worker' },
    { value: 'quality control inspector', label: 'Quality Control Inspector' },
    { value: 'packer', label: 'Packer' },
    { value: 'inventory clerk', label: 'Inventory Clerk' },
    { value: 'logistics coordinator', label: 'Logistics Coordinator' },
    { value: 'supply chain assistant', label: 'Supply Chain Assistant' },
    { value: 'shipping coordinator', label: 'Shipping Coordinator' },
    { value: 'dispatcher', label: 'Dispatcher' },
    { value: 'mailroom clerk', label: 'Mailroom Clerk' },
    { value: 'document scanner', label: 'Document Scanner' },
    { value: 'archivist', label: 'Archivist' },
    { value: 'file clerk', label: 'File Clerk' },
    { value: 'receptionist', label: 'Receptionist' },
    { value: 'concierge', label: 'Concierge' },
    { value: 'doorman', label: 'Doorman' },
    { value: 'ticket seller', label: 'Ticket Seller' },
    { value: 'usher', label: 'Usher' },
    { value: 'museum guide', label: 'Museum Guide' },
    { value: 'tour guide', label: 'Tour Guide' },
    { value: 'travel agent', label: 'Travel Agent' },
    { value: 'hotel front desk clerk', label: 'Hotel Front Desk Clerk' },
    { value: 'bellhop', label: 'Bellhop' },
    { value: 'housekeeping supervisor', label: 'Housekeeping Supervisor' },
    { value: 'hotel maintenance worker', label: 'Hotel Maintenance Worker' },
    { value: 'resort activities coordinator', label: 'Resort Activities Coordinator' },
    { value: 'lifeguard', label: 'Lifeguard' },
    { value: 'swimming instructor', label: 'Swimming Instructor' },
    { value: 'fitness instructor', label: 'Fitness Instructor' },
    { value: 'tennis coach', label: 'Tennis Coach' },
    { value: 'golf instructor', label: 'Golf Instructor' },
    { value: 'ski instructor', label: 'Ski Instructor' },
    { value: 'snowboard instructor', label: 'Snowboard Instructor' },
    { value: 'horse riding instructor', label: 'Horse Riding Instructor' },
    { value: 'dog trainer', label: 'Dog Trainer' },
    { value: 'pet groomer', label: 'Pet Groomer' },
    { value: 'veterinary technician', label: 'Veterinary Technician' },
    { value: 'zookeeper', label: 'Zookeeper' },
    { value: 'aquarium keeper', label: 'Aquarium Keeper' },
    { value: 'conservation worker', label: 'Conservation Worker' },
    { value: 'wildlife rehabilitator', label: 'Wildlife Rehabilitator' },
    { value: 'environmental scientist', label: 'Environmental Scientist' },
    { value: 'park naturalist', label: 'Park Naturalist' },
    { value: 'agricultural worker', label: 'Agricultural Worker' },
    { value: 'farm laborer', label: 'Farm Laborer' },
    { value: 'ranch hand', label: 'Ranch Hand' },
    { value: 'cattle driver', label: 'Cattle Driver' },
    { value: 'beekeeper', label: 'Beekeeper' },
    { value: 'fisherman', label: 'Fisherman' },
    { value: 'fish hatchery worker', label: 'Fish Hatchery Worker' },
    { value: 'forest worker', label: 'Forest Worker' },
    { value: 'tree planter', label: 'Tree Planter' },
    { value: 'lumberjack', label: 'Lumberjack' },
    { value: 'forestry technician', label: 'Forestry Technician' },
    { value: 'firewatcher', label: 'Firewatcher' },
    { value: 'woodworker', label: 'Woodworker' },
    { value: 'cabinetmaker', label: 'Cabinetmaker' },
    { value: 'furniture maker', label: 'Furniture Maker' },
    { value: 'glassblower', label: 'Glassblower' },
    { value: 'ceramicist', label: 'Ceramicist' },
    { value: 'blacksmith', label: 'Blacksmith' },
    { value: 'jeweler', label: 'Jeweler' },
    { value: 'watch repairer', label: 'Watch Repairer' },
    { value: 'metalworker', label: 'Metalworker' },
    { value: 'tool and die maker', label: 'Tool and Die Maker' },
    { value: 'machinist', label: 'Machinist' },
    { value: 'welder', label: 'Welder' },
    { value: 'sheet metal worker', label: 'Sheet Metal Worker' },
    { value: 'boilermaker', label: 'Boilermaker' },
    { value: 'pipefitter', label: 'Pipefitter' },
    { value: 'steamfitter', label: 'Steamfitter' },
    { value: 'ironworker', label: 'Ironworker' },
    { value: 'roofer', label: 'Roofer' },
    { value: 'tiler', label: 'Tiler' },
    { value: 'plasterer', label: 'Plasterer' },
    { value: 'drywall installer', label: 'Drywall Installer' },
    { value: 'mason', label: 'Mason' },
    { value: 'bricklayer', label: 'Bricklayer' },
    { value: 'concrete finisher', label: 'Concrete Finisher' },
    { value: 'paver', label: 'Paver' },
    { value: 'land surveyor', label: 'Land Surveyor' },
    { value: 'heavy equipment operator', label: 'Heavy Equipment Operator' },
    { value: 'crane operator', label: 'Crane Operator' },
    { value: 'excavator operator', label: 'Excavator Operator' },
    { value: 'bulldozer operator', label: 'Bulldozer Operator' },
    { value: 'dump truck driver', label: 'Dump Truck Driver' },
    { value: 'construction laborer', label: 'Construction Laborer' },
    { value: 'electrician', label: 'Electrician' },
    { value: 'plumber', label: 'Plumber' },
    { value: 'hvac technician', label: 'HVAC Technician' },
    { value: 'painter', label: 'Painter' },
    { value: 'flooring installer', label: 'Flooring Installer' },
    { value: 'carpenter', label: 'Carpenter' },
    { value: 'joiner', label: 'Joiner' },
    { value: 'framer', label: 'Framer' },
    { value: 'general contractor', label: 'General Contractor' },
    { value: 'demolition worker', label: 'Demolition Worker' },
    { value: 'scaffolder', label: 'Scaffolder' },
    { value: 'rigger', label: 'Rigger' },
    { value: 'insulator', label: 'Insulator' },
    { value: 'solar panel installer', label: 'Solar Panel Installer' },
    { value: 'wind turbine technician', label: 'Wind Turbine Technician' },
    { value: 'electric car technician', label: 'Electric Car Technician' },
    { value: 'battery technician', label: 'Battery Technician' },
    { value: 'satellite dish installer', label: 'Satellite Dish Installer' },
    { value: 'telecom line installer', label: 'Telecom Line Installer' },
    { value: 'fiber optic technician', label: 'Fiber Optic Technician' },
    { value: 'security system installer', label: 'Security System Installer' },
    { value: 'appliance repair technician', label: 'Appliance Repair Technician' },
    { value: 'elevator technician', label: 'Elevator Technician' },
    { value: 'escalator technician', label: 'Escalator Technician' },
    { value: 'vending machine repairer', label: 'Vending Machine Repairer' },
    { value: 'atm technician', label: 'ATM Technician' },

    { value: 'locksmith', label: 'Locksmith' },
    { value: 'safe technician', label: 'Safe Technician' },
    { value: 'alarm installer', label: 'Alarm Installer' },
    { value: 'automotive technician', label: 'Automotive Technician' },
    { value: 'diesel mechanic', label: 'Diesel Mechanic' },
    { value: 'boat mechanic', label: 'Boat Mechanic' },
    { value: 'airplane mechanic', label: 'Airplane Mechanic' },
    { value: 'helicopter mechanic', label: 'Helicopter Mechanic' },
    { value: 'small engine mechanic', label: 'Small Engine Mechanic' },
    { value: 'motorcycle mechanic', label: 'Motorcycle Mechanic' },
    { value: 'bicycle mechanic', label: 'Bicycle Mechanic' },
    { value: 'tire technician', label: 'Tire Technician' },
    { value: 'auto body repair technician', label: 'Auto Body Repair Technician' },
    { value: 'auto glass technician', label: 'Auto Glass Technician' },
    { value: 'tow truck driver', label: 'Tow Truck Driver' },
    { value: 'bus driver', label: 'Bus Driver' },
    { value: 'taxi driver', label: 'Taxi Driver' },
    { value: 'limousine driver', label: 'Limousine Driver' },
    { value: 'ride-share driver', label: 'Ride-Share Driver' },
    { value: 'delivery driver', label: 'Delivery Driver' },
    { value: 'courier', label: 'Courier' },
    { value: 'mail carrier', label: 'Mail Carrier' },
    { value: 'postal worker', label: 'Postal Worker' },
    { value: 'railroad conductor', label: 'Railroad Conductor' },
    { value: 'locomotive engineer', label: 'Locomotive Engineer' },
    { value: 'subway operator', label: 'Subway Operator' },
    { value: 'streetcar operator', label: 'Streetcar Operator' },
    { value: 'ship captain', label: 'Ship Captain' },
    { value: 'deckhand', label: 'Deckhand' },
    { value: 'boat pilot', label: 'Boat Pilot' },
    { value: 'ferry operator', label: 'Ferry Operator' },
    { value: 'dock worker', label: 'Dock Worker' },
    { value: 'harbor master', label: 'Harbor Master' },
    { value: 'cargo handler', label: 'Cargo Handler' },
    { value: 'crane operator (dock)', label: 'Crane Operator (Dock)' },
    { value: 'baggage handler', label: 'Baggage Handler' },
    { value: 'air traffic controller', label: 'Air Traffic Controller' },
    { value: 'pilot', label: 'Pilot' },
    { value: 'flight attendant', label: 'Flight Attendant' },
    { value: 'airport ground crew', label: 'Airport Ground Crew' },
    { value: 'security guard', label: 'Security Guard' },
    { value: 'bodyguard', label: 'Bodyguard' },

    { value: 'private investigator', label: 'Private Investigator' },
    { value: 'detective', label: 'Detective' },
    { value: 'law enforcement officer', label: 'Law Enforcement Officer' },
    { value: 'correctional officer', label: 'Correctional Officer' },
    { value: 'bailiff', label: 'Bailiff' },
    { value: 'firefighter', label: 'Firefighter' },
    { value: 'paramedic', label: 'Paramedic' },
    { value: 'emt', label: 'EMT' },
    { value: 'nurse', label: 'Nurse' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'pharmacist', label: 'Pharmacist' },
    { value: 'pharmacy technician', label: 'Pharmacy Technician' },
    { value: 'radiology technician', label: 'Radiology Technician' },
    { value: 'medical lab technician', label: 'Medical Lab Technician' },
    { value: 'surgical technician', label: 'Surgical Technician' },
    { value: 'anesthesiologist', label: 'Anesthesiologist' },
    { value: 'dentist', label: 'Dentist' },
    { value: 'dental hygienist', label: 'Dental Hygienist' },
    { value: 'optometrist', label: 'Optometrist' },
    { value: 'chiropractor', label: 'Chiropractor' },
    { value: 'physiotherapist', label: 'Physiotherapist' },
    { value: 'occupational therapist', label: 'Occupational Therapist' },
    { value: 'speech therapist', label: 'Speech Therapist' },
    { value: 'psychologist', label: 'Psychologist' },
    { value: 'psychiatrist', label: 'Psychiatrist' },
    { value: 'counselor', label: 'Counselor' },
    { value: 'social worker', label: 'Social Worker' },
    { value: 'school counselor', label: 'School Counselor' },
    { value: 'life coach', label: 'Life Coach' },
    { value: 'fitness trainer', label: 'Fitness Trainer' },
    { value: 'nutritionist', label: 'Nutritionist' },
    { value: 'yoga instructor', label: 'Yoga Instructor' },
    { value: 'meditation guide', label: 'Meditation Guide' },
    { value: 'massage therapist', label: 'Massage Therapist' },
    { value: 'acupuncturist', label: 'Acupuncturist' },
    { value: 'herbalist', label: 'Herbalist' },
    { value: 'reflexologist', label: 'Reflexologist' },
    { value: 'aromatherapist', label: 'Aromatherapist' },
    { value: 'art therapist', label: 'Art Therapist' },
    { value: 'music therapist', label: 'Music Therapist' },
    { value: 'occupational therapy assistant', label: 'Occupational Therapy Assistant' },
    { value: 'home health aide', label: 'Home Health Aide' },
    { value: 'caregiver', label: 'Caregiver' },
    { value: 'hospice worker', label: 'Hospice Worker' },
    { value: 'midwife', label: 'Midwife' },
    { value: 'doula', label: 'Doula' },
    { value: 'nanny', label: 'Nanny' },
    { value: 'babysitter', label: 'Babysitter' },
    { value: 'daycare worker', label: 'Daycare Worker' },
    { value: 'preschool teacher', label: 'Preschool Teacher' },
    { value: 'kindergarten teacher', label: 'Kindergarten Teacher' },
    { value: 'elementary school teacher', label: 'Elementary School Teacher' },
    { value: 'middle school teacher', label: 'Middle School Teacher' },
    { value: 'high school teacher', label: 'High School Teacher' },
    { value: 'substitute teacher', label: 'Substitute Teacher' },
    { value: 'pet sitting', label: 'Pet Sitting' },
    { value: 'dog walking', label: 'Dog Walking' },
    { value: 'voice over artist', label: 'Voice Over Artist' },
    { value: 'social media moderator', label: 'Social Media Moderator' },
    { value: 'virtual reality designer', label: 'Virtual Reality Designer' },
    { value: 'drone pilot', label: 'Drone Pilot' },
    { value: 'user tester', label: 'User Tester' },
    { value: 'beta tester', label: 'Beta Tester' },
    { value: 'mystery shopper', label: 'Mystery Shopper' },
    { value: 'influencer marketing specialist', label: 'Influencer Marketing Specialist' },
    { value: 'nft artist', label: 'NFT Artist' },
    { value: 'home organizer', label: 'Home Organizer' },
    { value: 'decluttering specialist', label: 'Decluttering Specialist' },
    { value: 'podcast editor', label: 'Podcast Editor' },
    { value: 'online course creator', label: 'Online Course Creator' },
    { value: 'sustainable living consultant', label: 'Sustainable Living Consultant' },
    { value: 'digital community manager', label: 'Digital Community Manager' },
    { value: 'elderly companion', label: 'Elderly Companion' },
    { value: 'content localization specialist', label: 'Content Localization Specialist' },
    { value: 'ai prompt engineer', label: 'AI Prompt Engineer' },
    { value: 'mobile app bug bounty hunter', label: 'Mobile App Bug Bounty Hunter' },
    { value: 'food stylist', label: 'Food Stylist' },
    { value: 'eco-friendly product developer', label: 'Eco-Friendly Product Developer' },
    { value: 'remote technical support specialist', label: 'Remote Technical Support Specialist' },

    { value: 'personal concierge', label: 'Personal Concierge' },
    { value: 'plant care specialist', label: 'Plant Care Specialist' },
    { value: 'caricature artist', label: 'Caricature Artist' },
    { value: 'digital accessibility consultant', label: 'Digital Accessibility Consultant' },
    { value: 'online language partner', label: 'Online Language Partner' },
    { value: 'fantasy map illustrator', label: 'Fantasy Map Illustrator' },
    { value: 'subscription box curator', label: 'Subscription Box Curator' },
    { value: 'comic strip creator', label: 'Comic Strip Creator' },
    { value: 'reputation manager', label: 'Reputation Manager' },
    { value: 'upcycling specialist', label: 'Upcycling Specialist' },
    { value: 'home staging consultant', label: 'Home Staging Consultant' },
    { value: 'personal brand consultant', label: 'Personal Brand Consultant' },
    { value: 'children\'s book illustrator', label: 'Children\'s Book Illustrator' },
    { value: 'ai trainer', label: 'AI Trainer' },
    { value: 'data labeling specialist', label: 'Data Labeling Specialist' },
    { value: 'growth hacker', label: 'Growth Hacker' },
    { value: 'grant writer', label: 'Grant Writer' },
    { value: 'virtual event coordinator', label: 'Virtual Event Coordinator' },
    { value: 'digital well-being coach', label: 'Digital Well-being Coach' },
    { value: 'personal chef', label: 'Personal Chef' },
    { value: 'house cleaner', label: 'House Cleaner' },
    { value: 'personal stylist', label: 'Personal Stylist' },
    { value: 'laundry service provider', label: 'Laundry Service Provider' },
    { value: 'grocery shopper', label: 'Grocery Shopper' },
    { value: 'errand runner', label: 'Errand Runner' },
    { value: 'personal fitness trainer', label: 'Personal Fitness Trainer' },
    { value: 'life coach', label: 'Life Coach' },
    { value: 'home repair technician', label: 'Home Repair Technician' },
    { value: 'babysitter', label: 'Babysitter' },
    { value: 'elderly caregiver', label: 'Elderly Caregiver' },
    { value: 'personal assistant', label: 'Personal Assistant' },
    { value: 'car washer', label: 'Car Washer' },
    { value: 'home tutor', label: 'Home Tutor' },
    { value: 'gardener', label: 'Gardener' },
    { value: 'pool cleaner', label: 'Pool Cleaner' },
    { value: 'pet groomer', label: 'Pet Groomer' },
    { value: 'wardrobe organizer', label: 'Wardrobe Organizer' },
    { value: 'personal driver', label: 'Personal Driver' },
    { value: 'meal prepper', label: 'Meal Prepper' },
    { value: 'fitness buddy', label: 'Fitness Buddy' },
    { value: 'chauffeur', label: 'Chauffeur' },
    { value: 'move-out cleaning specialist', label: 'Move-Out Cleaning Specialist' },
    { value: 'closet organizer', label: 'Closet Organizer' },
    { value: 'home security installer', label: 'Home Security Installer' },
    { value: 'pet trainer', label: 'Pet Trainer' },
    { value: 'virtual friend', label: 'Virtual Friend' },
    { value: 'home decor consultant', label: 'Home Decor Consultant' },
    { value: 'gift wrapping specialist', label: 'Gift Wrapping Specialist' },
    { value: 'holiday decorator', label: 'Holiday Decorator' },
    { value: 'furniture assembler', label: 'Furniture Assembler' },
    { value: 'car maintenance advisor', label: 'Car Maintenance Advisor' },
    { value: 'home energy auditor', label: 'Home Energy Auditor' },
    { value: 'remote organizer', label: 'Remote Organizer' },
    { value: 'clutter cleaner', label: 'Clutter Cleaner' },
    { value: 'interior painter', label: 'Interior Painter' },
    { value: 'home barista trainer', label: 'Home Barista Trainer' },
    { value: 'pet boarding host', label: 'Pet Boarding Host' },
    { value: 'house sitter', label: 'House Sitter' },
    { value: 'bird cage cleaner', label: 'Bird Cage Cleaner' },
    { value: 'yoga instructor', label: 'Yoga Instructor' },
    { value: 'home workout trainer', label: 'Home Workout Trainer' },
    { value: 'plant sitter', label: 'Plant Sitter' },
    { value: 'feng shui consultant', label: 'Feng Shui Consultant' },
    { value: 'closet detox specialist', label: 'Closet Detox Specialist' },
    { value: 'wardrobe personal shopper', label: 'Wardrobe Personal Shopper' },
    { value: 'window cleaner', label: 'Window Cleaner' },
    { value: 'pet walker', label: 'Pet Walker' },
    { value: 'personal shopper', label: 'Personal Shopper' },
    { value: 'childproofing consultant', label: 'Childproofing Consultant' },
    { value: 'party planner', label: 'Party Planner' },
    { value: 'home organizer', label: 'Home Organizer' },
    { value: 'tech setup specialist', label: 'Tech Setup Specialist' },
    { value: 'pet sitter', label: 'Pet Sitter' },
    { value: 'dog trainer', label: 'Dog Trainer' },
    { value: 'carpet cleaner', label: 'Carpet Cleaner' },
    { value: 'window treatment installer', label: 'Window Treatment Installer' },
    { value: 'bike repair technician', label: 'Bike Repair Technician' },
    { value: 'home staging expert', label: 'Home Staging Expert' },
    { value: 'personal concierge', label: 'Personal Concierge' },
    { value: 'decluttering expert', label: 'Decluttering Expert' },
    { value: 'household manager', label: 'Household Manager' },
    { value: 'holiday light installer', label: 'Holiday Light Installer' },
    { value: 'outdoor furniture assembler', label: 'Outdoor Furniture Assembler' },
    { value: 'snow shoveling service', label: 'Snow Shoveling Service' },
    { value: 'gutter cleaner', label: 'Gutter Cleaner' },

    { value: 'chimney sweep', label: 'Chimney Sweep' },
    { value: 'furniture upholstery cleaner', label: 'Furniture Upholstery Cleaner' },
    { value: 'garage organizer', label: 'Garage Organizer' },
    { value: 'basement decluttering', label: 'Basement Decluttering' },
    { value: 'attic organizer', label: 'Attic Organizer' },
    { value: 'home theater setup', label: 'Home Theater Setup' },
    { value: 'remote technical support', label: 'Remote Technical Support' },
    { value: 'home inventory specialist', label: 'Home Inventory Specialist' },
    { value: 'disaster preparedness consultant', label: 'Disaster Preparedness Consultant' },
    { value: 'recycling consultant', label: 'Recycling Consultant' },
    { value: 'eco-friendly home consultant', label: 'Eco-Friendly Home Consultant' },
    { value: 'closet renovation assistant', label: 'Closet Renovation Assistant' },
    { value: 'pet waste removal service', label: 'Pet Waste Removal Service' },
    { value: 'kitchen organizer', label: 'Kitchen Organizer' },
    { value: 'home-based beauty services', label: 'Home-Based Beauty Services' },
    { value: 'garden designer', label: 'Garden Designer' },
    { value: 'indoor plant care specialist', label: 'Indoor Plant Care Specialist' },
    { value: 'outdoor space decorator', label: 'Outdoor Space Decorator' },
    { value: 'handyman services', label: 'Handyman Services' },
    { value: 'skateboard tutor', label: 'Skateboard Tutor' },
    { value: 'closet designer', label: 'Closet Designer' },
    { value: 'pet portrait artist', label: 'Pet Portrait Artist' },
    { value: 'drone photography', label: 'Drone Photography' },
    { value: 'bike assembly', label: 'Bike Assembly' },
    { value: 'mattress cleaner', label: 'Mattress Cleaner' },
    { value: 'garage door repair', label: 'Garage Door Repair' },
    { value: 'curb appeal designer', label: 'Curb Appeal Designer' },
    { value: 'shed organizer', label: 'Shed Organizer' },
    { value: 'custom gift creator', label: 'Custom Gift Creator' },
    { value: 'home safety inspector', label: 'Home Safety Inspector' },
    { value: 'city planner', label: 'City Planner' },
    { value: 'public health educator', label: 'Public Health Educator' },
    { value: 'environmental compliance inspector', label: 'Environmental Compliance Inspector' },
    { value: 'urban forester', label: 'Urban Forester' },
    { value: 'community outreach coordinator', label: 'Community Outreach Coordinator' },
    { value: 'disaster recovery specialist', label: 'Disaster Recovery Specialist' },
    { value: 'public relations specialist', label: 'Public Relations Specialist' },
    { value: 'economic development specialist', label: 'Economic Development Specialist' },
    { value: 'transportation analyst', label: 'Transportation Analyst' },
    { value: 'veterans service officer', label: 'Veterans Service Officer' },
    { value: 'municipal budget analyst', label: 'Municipal Budget Analyst' },
    { value: 'social services caseworker', label: 'Social Services Caseworker' },
    { value: 'grant writer', label: 'Grant Writer' },
    { value: 'legislative assistant', label: 'Legislative Assistant' },
    { value: 'public policy analyst', label: 'Public Policy Analyst' },
    { value: 'border patrol agent', label: 'Border Patrol Agent' },
    { value: 'fire inspector', label: 'Fire Inspector' },
    { value: 'emergency management director', label: 'Emergency Management Director' },
    { value: 'public housing manager', label: 'Public Housing Manager' },
    { value: 'wastewater treatment operator', label: 'Wastewater Treatment Operator' },
    { value: 'community service officer', label: 'Community Service Officer' },
    { value: 'natural resource specialist', label: 'Natural Resource Specialist' },
    { value: 'customs broker', label: 'Customs Broker' },
    { value: 'elections officer', label: 'Elections Officer' },
    { value: 'park ranger', label: 'Park Ranger' },
    { value: 'environmental health specialist', label: 'Environmental Health Specialist' },
    { value: 'government program analyst', label: 'Government Program Analyst' },
    { value: 'public works inspector', label: 'Public Works Inspector' },
    { value: 'corrections officer', label: 'Corrections Officer' },
    { value: 'court clerk', label: 'Court Clerk' },
    { value: 'water quality specialist', label: 'Water Quality Specialist' },
    { value: 'tax auditor', label: 'Tax Auditor' },
    { value: 'public transit operator', label: 'Public Transit Operator' },
    { value: 'firefighter emt', label: 'Firefighter EMT' },
    { value: 'forestry technician', label: 'Forestry Technician' },
    { value: 'conservation law enforcement officer', label: 'Conservation Law Enforcement Officer' },
    { value: 'procurement specialist', label: 'Procurement Specialist' },
    { value: 'government affairs liaison', label: 'Government Affairs Liaison' },
    { value: 'building code inspector', label: 'Building Code Inspector' },
    { value: 'substance abuse counselor', label: 'Substance Abuse Counselor' },
    { value: 'immigration services officer', label: 'Immigration Services Officer' },
    { value: 'municipal court judge', label: 'Municipal Court Judge' },
    { value: 'road maintenance technician', label: 'Road Maintenance Technician' },
    { value: 'wildlife rehabilitator', label: 'Wildlife Rehabilitator' },
    { value: 'economic policy advisor', label: 'Economic Policy Advisor' },
    { value: 'community development block grant coordinator', label: 'Community Development Block Grant Coordinator' },
    { value: 'air quality specialist', label: 'Air Quality Specialist' },
    { value: 'floodplain manager', label: 'Floodplain Manager' },
    { value: 'energy efficiency analyst', label: 'Energy Efficiency Analyst' },
    { value: 'public housing inspector', label: 'Public Housing Inspector' },
    { value: 'census enumerator', label: 'Census Enumerator' },
    { value: 'transportation security officer', label: 'Transportation Security Officer' },
    { value: 'environmental conservation officer', label: 'Environmental Conservation Officer' },
    { value: 'zoning administrator', label: 'Zoning Administrator' },
    { value: 'land surveyor', label: 'Land Surveyor' },
    { value: 'public works director', label: 'Public Works Director' },
    { value: 'public defender', label: 'Public Defender' },
    { value: 'compliance analyst', label: 'Compliance Analyst' },
    { value: 'fire chief', label: 'Fire Chief' },
    { value: 'federal air marshal', label: 'Federal Air Marshal' },
    { value: 'homeland security analyst', label: 'Homeland Security Analyst' },
    { value: 'community health worker', label: 'Community Health Worker' },
    { value: 'diplomatic security officer', label: 'Diplomatic Security Officer' },
    { value: 'bureau of land management ranger', label: 'Bureau of Land Management Ranger' },
    { value: 'grant compliance officer', label: 'Grant Compliance Officer' },
    { value: 'environmental planner', label: 'Environmental Planner' },
    { value: 'public sector it specialist', label: 'Public Sector IT Specialist' },
    { value: 'parks and recreation director', label: 'Parks and Recreation Director' },
    { value: 'police dispatcher', label: 'Police Dispatcher' },
    { value: 'environmental policy consultant', label: 'Environmental Policy Consultant' },
    { value: 'sanitation worker', label: 'Sanitation Worker' },
    { value: 'wildlife biologist', label: 'Wildlife Biologist' },
    { value: 'community redevelopment planner', label: 'Community Redevelopment Planner' },
    { value: 'state park maintenance worker', label: 'State Park Maintenance Worker' },
    { value: 'criminal investigator', label: 'Criminal Investigator' },
    { value: 'probation officer', label: 'Probation Officer' },
    { value: 'border enforcement specialist', label: 'Border Enforcement Specialist' },
    { value: 'public assistance program specialist', label: 'Public Assistance Program Specialist' },
    { value: 'animal control officer', label: 'Animal Control Officer' },
    { value: 'natural disaster coordinator', label: 'Natural Disaster Coordinator' },
    { value: 'traffic analyst', label: 'Traffic Analyst' },
    { value: 'municipal water plant operator', label: 'Municipal Water Plant Operator' },
    { value: 'geographic information systems (gis) specialist', label: 'Geographic Information Systems (GIS) Specialist' },
    { value: 'tax collection agent', label: 'Tax Collection Agent' },
    { value: 'bridge inspector', label: 'Bridge Inspector' },
    { value: 'utility billing specialist', label: 'Utility Billing Specialist' },
    { value: 'historic preservation specialist', label: 'Historic Preservation Specialist' },
    { value: 'election poll worker', label: 'Election Poll Worker' },
    { value: 'community policing officer', label: 'Community Policing Officer' },
    { value: 'veterinary public health officer', label: 'Veterinary Public Health Officer' },
    { value: 'emergency call operator', label: 'Emergency Call Operator' },
    { value: 'fisheries technician', label: 'Fisheries Technician' },
    { value: 'flood control engineer', label: 'Flood Control Engineer' },
    { value: 'city code enforcement officer', label: 'City Code Enforcement Officer' },
    { value: 'air pollution control specialist', label: 'Air Pollution Control Specialist' },
    { value: 'forestry program manager', label: 'Forestry Program Manager' },
    { value: 'public engagement coordinator', label: 'Public Engagement Coordinator' },
    { value: 'revenue agent', label: 'Revenue Agent' },
    { value: 'public health nurse', label: 'Public Health Nurse' },
    { value: 'electric utility lineman', label: 'Electric Utility Lineman' },
    { value: 'disaster response coordinator', label: 'Disaster Response Coordinator' },
    { value: 'court clerk', label: 'Court Clerk' },
    { value: 'legislative aide', label: 'Legislative Aide' },
    { value: 'public policy analyst', label: 'Public Policy Analyst' },
    { value: 'military recruitment officer', label: 'Military Recruitment Officer' },
    { value: 'customs inspector', label: 'Customs Inspector' },
    { value: 'veteran affairs counselor', label: 'Veteran Affairs Counselor' },
    { value: 'firefighter', label: 'Firefighter' },
    { value: 'county agricultural commissioner', label: 'County Agricultural Commissioner' },
    { value: 'wastewater treatment technician', label: 'Wastewater Treatment Technician' },
    { value: 'economic development specialist', label: 'Economic Development Specialist' },
    { value: 'public transit operator', label: 'Public Transit Operator' },
    { value: 'water resource manager', label: 'Water Resource Manager' },
    { value: 'licensing officer', label: 'Licensing Officer' },
    { value: 'government program auditor', label: 'Government Program Auditor' },
    { value: 'food safety inspector', label: 'Food Safety Inspector' },
    { value: 'community engagement specialist', label: 'Community Engagement Specialist' },
    { value: 'child welfare case worker', label: 'Child Welfare Case Worker' },
    { value: 'rural development agent', label: 'Rural Development Agent' },
    { value: 'marine safety officer', label: 'Marine Safety Officer' },
    { value: 'housing coordinator', label: 'Housing Coordinator' },
    { value: 'cultural affairs coordinator', label: 'Cultural Affairs Coordinator' },
    { value: 'public health epidemiologist', label: 'Public Health Epidemiologist' },
    { value: 'government archivist', label: 'Government Archivist' },
    { value: 'land use planner', label: 'Land Use Planner' },
    { value: 'corrections officer', label: 'Corrections Officer' },
    { value: 'bridge and tunnel operator', label: 'Bridge and Tunnel Operator' },
    { value: 'postal service mail carrier', label: 'Postal Service Mail Carrier' },
    { value: 'immigration case manager', label: 'Immigration Case Manager' },
    { value: 'pension fund administrator', label: 'Pension Fund Administrator' },
    { value: 'urban forestry specialist', label: 'Urban Forestry Specialist' },
    { value: 'regulatory compliance specialist', label: 'Regulatory Compliance Specialist' },
    { value: 'highway maintenance worker', label: 'Highway Maintenance Worker' },
    { value: 'emergency medical technician (emt)', label: 'Emergency Medical Technician (EMT)' },
    { value: 'legal investigator', label: 'Legal Investigator' },
    { value: 'public library archivist', label: 'Public Library Archivist' },
    { value: 'park ranger', label: 'Park Ranger' },
    { value: 'radiological emergency coordinator', label: 'Radiological Emergency Coordinator' },
    { value: 'public relations officer', label: 'Public Relations Officer' },
    { value: 'municipal budget analyst', label: 'Municipal Budget Analyst' },
    { value: 'school crossing guard', label: 'School Crossing Guard' },
    { value: 'public facility maintenance worker', label: 'Public Facility Maintenance Worker' },
    { value: 'traffic control technician', label: 'Traffic Control Technician' },
    { value: 'harbor patrol officer', label: 'Harbor Patrol Officer' },
    { value: 'public utility analyst', label: 'Public Utility Analyst' },
    { value: 'records management technician', label: 'Records Management Technician' },
    { value: 'foreclosure prevention counselor', label: 'Foreclosure Prevention Counselor' },
    { value: 'local government attorney', label: 'Local Government Attorney' },
    { value: 'bridge toll collector', label: 'Bridge Toll Collector' },
    { value: 'utility regulator', label: 'Utility Regulator' },
    { value: 'fish and game warden', label: 'Fish and Game Warden' },
    { value: 'virtual assistant', label: 'Virtual Assistant' },
    { value: 'content writer', label: 'Content Writer' },
    { value: 'graphic designer', label: 'Graphic Designer' },
    { value: 'web developer', label: 'Web Developer' },
    { value: 'seo specialist', label: 'SEO Specialist' },
    { value: 'social media manager', label: 'Social Media Manager' },
    { value: 'data entry clerk', label: 'Data Entry Clerk' },
    { value: 'online tutor', label: 'Online Tutor' },
    { value: 'video editor', label: 'Video Editor' },
    { value: 'voiceover artist', label: 'Voiceover Artist' },
    { value: 'digital marketing consultant', label: 'Digital Marketing Consultant' },
    { value: 'freelance photographer', label: 'Freelance Photographer' },
    { value: 'email marketing specialist', label: 'Email Marketing Specialist' },
    { value: 'ui/ux designer', label: 'UI/UX Designer' },
    { value: 'app developer', label: 'App Developer' },
    { value: 'translator', label: 'Translator' },
    { value: 'proofreader', label: 'Proofreader' },
    { value: 'copywriter', label: 'Copywriter' },
    { value: 'illustrator', label: 'Illustrator' },
    { value: 'e-commerce consultant', label: 'E-commerce Consultant' },
    { value: '3d modeler', label: '3D Modeler' },
    { value: 'transcriptionist', label: 'Transcriptionist' },
    { value: 'podcast editor', label: 'Podcast Editor' },
    { value: 'freelance accountant', label: 'Freelance Accountant' },
    { value: 'public relations specialist', label: 'Public Relations Specialist' },
    { value: 'online fitness coach', label: 'Online Fitness Coach' },
    { value: 'business consultant', label: 'Business Consultant' },
    { value: 'freelance journalist', label: 'Freelance Journalist' },
    { value: 'data analyst', label: 'Data Analyst' },
    { value: 'legal consultant', label: 'Legal Consultant' },
    { value: 'freelance project manager', label: 'Freelance Project Manager' },
    { value: 'event planner', label: 'Event Planner' },
    { value: 'freelance researcher', label: 'Freelance Researcher' },
    { value: 'web content manager', label: 'Web Content Manager' },
    { value: 'music producer', label: 'Music Producer' },
    { value: 'voice coach', label: 'Voice Coach' },
    { value: 'freelance recruiter', label: 'Freelance Recruiter' },
    { value: 'fashion stylist', label: 'Fashion Stylist' },
    { value: 'freelance chef', label: 'Freelance Chef' },
    { value: 'freelance bartender', label: 'Freelance Bartender' },
    { value: 'freelance hair stylist', label: 'Freelance Hair Stylist' },
    { value: 'brand strategist', label: 'Brand Strategist' },
    { value: 'presentation designer', label: 'Presentation Designer' },
    { value: 'podcast producer', label: 'Podcast Producer' },
    { value: 'freelance personal trainer', label: 'Freelance Personal Trainer' },
    { value: 'resume writer', label: 'Resume Writer' },
    { value: 'freelance nutritionist', label: 'Freelance Nutritionist' },
    { value: 'freelance life coach', label: 'Freelance Life Coach' },
    { value: 'financial analyst', label: 'Financial Analyst' },
    { value: 'freelance surveyor', label: 'Freelance Surveyor' },
    { value: 'it support specialist', label: 'IT Support Specialist' },
    { value: 'market researcher', label: 'Market Researcher' },
    { value: 'email copywriter', label: 'Email Copywriter' },
    { value: 'freelance architect', label: 'Freelance Architect' },
    { value: 'social media influencer', label: 'Social Media Influencer' },
    { value: 'freelance event coordinator', label: 'Freelance Event Coordinator' },
    { value: 'freelance fundraiser', label: 'Freelance Fundraiser' },
    { value: 'customer service representative', label: 'Customer Service Representative' },
    { value: 'freelance sales consultant', label: 'Freelance Sales Consultant' },
    { value: 'hr consultant', label: 'HR Consultant' },
    { value: 'freelance fashion designer', label: 'Freelance Fashion Designer' },
    { value: 'e-learning developer', label: 'E-learning Developer' },
    { value: 'freelance travel consultant', label: 'Freelance Travel Consultant' },
    { value: 'freelance software tester', label: 'Freelance Software Tester' },
    { value: 'freelance medical writer', label: 'Freelance Medical Writer' },
    { value: 'freelance copy editor', label: 'Freelance Copy Editor' },
    { value: 'freelance video producer', label: 'Freelance Video Producer' },
    { value: 'freelance event photographer', label: 'Freelance Event Photographer' },
    { value: 'freelance online community manager', label: 'Freelance Online Community Manager' },
    { value: 'freelance grant writer', label: 'Freelance Grant Writer' },
    { value: 'freelance social media strategist', label: 'Freelance Social Media Strategist' },
    { value: 'freelance it consultant', label: 'Freelance IT Consultant' },
    { value: 'freelance real estate consultant', label: 'Freelance Real Estate Consultant' },
    { value: 'freelance app tester', label: 'Freelance App Tester' },
    { value: 'freelance marketing specialist', label: 'Freelance Marketing Specialist' },
    { value: 'freelance ux researcher', label: 'Freelance UX Researcher' },
    { value: 'freelance scriptwriter', label: 'Freelance Scriptwriter' },
    { value: 'freelance stock photographer', label: 'Freelance Stock Photographer' },
    { value: 'freelance research scientist', label: 'Freelance Research Scientist' },
    { value: 'freelance video animator', label: 'Freelance Video Animator' },
    { value: 'freelance event videographer', label: 'Freelance Event Videographer' },
    { value: 'freelance policy analyst', label: 'Freelance Policy Analyst' },
    { value: 'freelance cybersecurity consultant', label: 'Freelance Cybersecurity Consultant' },
    { value: 'freelance curriculum developer', label: 'Freelance Curriculum Developer' },
    { value: 'freelance technical writer', label: 'Freelance Technical Writer' },
    { value: 'freelance video game tester', label: 'Freelance Video Game Tester' },
    { value: 'freelance speechwriter', label: 'Freelance Speechwriter' },
    { value: 'freelance music instructor', label: 'Freelance Music Instructor' },
    { value: 'freelance data scientist', label: 'Freelance Data Scientist' },
    { value: 'freelance blockchain developer', label: 'Freelance Blockchain Developer' },
    { value: 'freelance sustainability consultant', label: 'Freelance Sustainability Consultant' },
    { value: 'freelance compliance specialist', label: 'Freelance Compliance Specialist' },
    { value: 'freelance risk management consultant', label: 'Freelance Risk Management Consultant' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit the Job</h2>
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
              required={formData.jobApplyingMode === "whatsapp" || formData.modeOfMessage === "whatsapp" || formData.modeOfMessage === "call"}
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
              <option value="call">Call</option>
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
              <FaMoneyBillWave className="inline mr-2" />Pay Rate (Optional)
            </label>
            <input
              type="number"
              id="payRate"
              name="payRate"
              required={!formData.payRateInWord ? true : false}
              value={formData.payRate}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="payRate">
              <FaMoneyBillWave className="inline mr-2" />Pay Rate Alternative (Optional)
            </label>
            <input
              id="payRateInWord"
              name="payRateInWord"
              // required={!formData.payRateInWord ? true : false}
              maxLength={10}
              value={formData.payRateInWord}
              onChange={handleInputChange}
              placeholder="Level 7 Pay"
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
              <option value="full/part-time">Full/Part-time</option>
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
          <div className="flex items-center">
            <input
              type="checkbox"
              id="visibility"
              name="visibility"
              checked={formData.visibility}
              onChange={handleInputChange}
              disabled={loading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="negotiation" className="ml-2 block text-sm text-gray-900">
              <AiFillEyeInvisible className="inline mr-2" />Visibility
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
              <option value="">Select job applying Mode</option>
              <option value="whatsapp">Whatsapp</option>
              <option value="website">Website</option>
              <option value="instagram">Instagram</option>
              <option value="withoutForm">Without Form</option>
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
              required={formData.jobApplyingMode !== "whatsapp" && formData.jobApplyingMode !== "withoutForm" ? true : false}
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
              <option value="">Who Offering Job</option>
              <option value="government">Government</option>
              <option value="individual">Individual</option>
              <option value="enterprise">Enterprise</option>
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

        <div className="flex">
          <Link href="/joblists/All/All"
            className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer"
          >
            Go Back To Job Lists
          </Link>
          <button
            disabled={loading ? true : false}
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-10"
          >
            {`${loading ? "Udating Job ..." : "Update Job"}`}
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditJob;
