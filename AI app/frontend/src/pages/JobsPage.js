import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import JobCard from '../components/JobCard';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import api from '../utils/api';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get('/jobs');
        setJobs(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const handleSearch = () => {
    const filtered = jobs.filter(job => 
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       job.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (locationFilter === '' || job.location.includes(locationFilter)) &&
      (jobTypeFilter === '' || job.jobType === jobTypeFilter)
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
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </Layout>
  );
};

export default JobsPage;