import Job from './Job';
import React from 'react';

// Function to extract keywords from description
const extractKeywords = (description) => {
  const stopWords = ['a', 'an', 'the', 'and', 'of', 'to', 'in', 'with', 'for', 'on', 'at', 'by', 'is', 'are', 'was', 'were', 'has', 'have', 'had', 'be', 'being', 'been'];
  const words = description.split(/\s+/).map(word => word.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ''));
  const filteredWords = words.filter(word => !stopWords.includes(word) && word.length > 1);
  const uniqueWords = [...new Set(filteredWords)];
  return uniqueWords.join(', ');
};

const getJob = async ({params}) => {

  const api = process.env.API_ENDPOINT;
  try {
    const response = await fetch(`${api}/adminGetJobId?id=${params.jobid}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return data.message; // Return error message as string
    }
    return data;
  } catch (error) {
    return "An error occurred while processing your request. Please contact support."; // Return error message as string
  }
};

export async function generateMetadata({ params }) {
  const jobData = await getJob({ params });
  const description = jobData?.shortDescription || "No jobs found matching your search. Try adjusting your filters or check back later for new listings. If you need help, feel free to contact support.";
  const keywords = extractKeywords(description);

  return {
    title: `Job Details | ${jobData?.title || 'Job not found'}`,
    description: description,
    keywords: keywords,
    openGraph: {
      images: [{ url: jobData.image }],
    },
  };
}

export default async function Page({ params }) {
  const jobId = await getJob({ params });

  return (
    <Job data={params} job={jobId} />
  );
}
