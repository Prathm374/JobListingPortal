import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import JobCard from '../components/JobCard';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchJobs = async () => {
      const mockJobs = [
        { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'San Francisco, CA', description: 'We are looking for a talented software engineer to join our team...', postedDate: '2023-05-15', type: 'Full-time' },
        { id: 2, title: 'Product Manager', company: 'Startup Inc', location: 'New York, NY', description: 'Exciting opportunity for a product manager to lead our new initiative...', postedDate: '2023-05-14', type: 'Full-time' },
        { id: 3, title: 'UX Designer', company: 'Design Studio', location: 'Los Angeles, CA', description: 'Join our creative team as a UX designer and help shape the future of our products...', postedDate: '2023-05-13', type: 'Contract' },
        { id: 4, title: 'Data Analyst', company: 'Big Data Corp', location: 'Chicago, IL', description: 'We are seeking a data analyst to help us make sense of our growing datasets...', postedDate: '2023-05-12', type: 'Part-time' },
        { id: 5, title: 'Marketing Specialist', company: 'Brand Builders', location: 'Miami, FL', description: 'Looking for a marketing specialist to drive our digital campaigns...', postedDate: '2023-05-11', type: 'Full-time' },
      ];
      setJobs(mockJobs);
      setFilteredJobs(mockJobs);
    };
    fetchJobs();
  }, []);

  const handleSearch = () => {
    const filtered = jobs.filter(job => 
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       job.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (locationFilter === '' || job.location.includes(locationFilter)) &&
      (jobTypeFilter === '' || job.type === jobTypeFilter)
    );
    setFilteredJobs(filtered);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Available Jobs</h1>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Input
            placeholder="Location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <Select
            options={[
              { value: '', label: 'All Job Types' },
              { value: 'Full-time', label: 'Full-time' },
              { value: 'Part-time', label: 'Part-time' },
              { value: 'Contract', label: 'Contract' },
            ]}
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </Layout>
  );
};

export default JobsPage;