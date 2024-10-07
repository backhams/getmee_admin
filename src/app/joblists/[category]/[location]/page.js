import JobSearchApp from './Joblist';
import React from 'react';

// Function to fetch job list based on category and location
const getJobList = async ({ params }) => {

    const api = process.env.API_ENDPOINT;
  try {
    const response = await fetch(`${api}/adminGetJobs?category=${params.category}&location=${params.location}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      return "Failed to fetch job data. Please try again later."; // Return error message as string
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return "An error occurred while processing your request. Please contact support."; // Return error message as string
  }
};

// Function to generate metadata based on category and location
export async function generateMetadata({ params }) {
  const category = decodeURIComponent(params.category);
  const location = decodeURIComponent(params.location);

  // Create dynamic title and description
  const title = category && location 
    ? `Top Jobs in ${category} | Jobs in ${location} | GetMee` 
    : location 
      ? `Jobs in ${location} | GetMee` 
      : category 
        ? `Top Jobs in ${category} | GetMee` 
        : 'Find Jobs | GetMee';

  const description = category && location
    ? `Discover top job opportunities in ${category} and find the best positions available in ${location}. Browse a variety of job listings tailored for you.`
    : location 
      ? `Explore job opportunities in ${location}. Find a range of positions and career options in your area.`
      : category 
        ? `Browse top job listings in ${category}. Find the best career opportunities and job options available in this category.`
        : `Find the latest job listings and career opportunities. Discover jobs across various categories and locations.`;

  const keywords = category && location
    ? `${category} jobs, ${location} jobs, top jobs in ${category}, best jobs in ${location}, ${category} career opportunities, jobs near ${location}`
    : location
      ? `jobs in ${location}, careers in ${location}, job listings ${location}`
      : category
        ? `jobs in ${category}, top ${category} jobs, ${category} career opportunities`
        : `job listings, careers, job opportunities`;

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      images: [
        { url: "https://lh3.googleusercontent.com/a-/ALV-UjW-De4gFcv-9JHSmyRCxKSbCVQ20WatWDLhLsGABmqVn7OSgfs=s52-p-k-rw-no" }
      ],
    },
  };
}

export default async function Page({ params }) {
  const joblists = await getJobList({ params });

  return (
    <JobSearchApp data={params} joblist={joblists} />
  );
}
