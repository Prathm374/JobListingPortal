import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import api from '../utils/api';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [applicationStatus, setApplicationStatus] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await api.get(`/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
    fetchJob();
  }, [id]);

  const handleApply = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/jobs/${id}/apply`, { coverLetter });
      setApplicationStatus(response.data.message);
      setCoverLetter('');
    } catch (error) {
      console.error('Error applying for job:', error);
      setApplicationStatus(error.response?.data?.message || 'Error submitting application. Please try again.');
    }
  };

  if (!job) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <Card.Header>
            <h1 className="text-3xl font-bold text-primary mb-2">{job.title}</h1>
            <p className="text-xl text-gray-600 mb-2">{job.company}</p>
            <p className="text-lg text-gray-500 mb-4">{job.location}</p>
          </Card.Header>
          <Card.Content>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                {job.jobType}
              </span>
              <span className="inline-block bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                {job.salary}
              </span>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                {job.experienceLevel}
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
            <p className="text-sm text-gray-500 mb-4">
              Posted on: {new Date(job.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
            </p>
            <h2 className="text-2xl font-semibold text-primary mb-2">Apply for this job</h2>
            <form onSubmit={handleApply}>
              <textarea
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Cover Letter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                required
              />
              <Button type="submit" className="w-full md:w-auto">Apply Now</Button>
            </form>
            {applicationStatus && <p className="mt-4 text-green-600">{applicationStatus}</p>}
          </Card.Content>
        </Card>
      </div>
    </Layout>
  );
};

export default JobDetailsPage;            