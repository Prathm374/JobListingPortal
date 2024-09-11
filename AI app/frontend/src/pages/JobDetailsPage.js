import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchJob = async () => {
      const mockJob = {
        id: 1,
        title: 'Software Engineer',
        company: 'Tech Co',
        location: 'San Francisco, CA',
        description: 'We are looking for a talented software engineer to join our team. The ideal candidate will have experience with React, Node.js, and MongoDB. You will be working on cutting-edge projects and collaborating with a team of passionate developers.',
        postedDate: '2023-05-15',
        type: 'Full-time',
        salary: '$100,000 - $150,000',
        requirements: [
          'Bachelors degree in Computer Science or related field',
          '3+ years of experience with React and Node.js',
          'Strong problem-solving skills',
          'Excellent communication skills',
        ],
      };
      setJob(mockJob);
    };
    fetchJob();
  }, [id]);

  if (!job) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <Card className="mb-8">
        <Card.Content>
          <h1 className="text-3xl font-bold text-primary mb-2">{job.title}</h1>
          <p className="text-xl text-gray-600 mb-2">{job.company}</p>
          <p className="text-lg text-gray-500 mb-4">{job.location}</p>
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              {job.type}
            </span>
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              {job.salary}
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-2">Job Description</h2>
          <p className="text-gray-700 mb-4">{job.description}</p>
          <h2 className="text-2xl font-semibold text-primary mb-2">Requirements</h2>
          <ul className="list-disc list-inside mb-4">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mb-4">Posted on: {new Date(job.postedDate).toLocaleDateString()}</p>
          <Button className="w-full md:w-auto">Apply Now</Button>
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default JobDetailsPage;