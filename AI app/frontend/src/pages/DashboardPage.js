import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import api from '../utils/api';

const DashboardPage = () => {
  const [userData, setUserData] = useState(null);
  const [applications, setApplications] = useState([]);
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userResponse = await api.get('/users/profile');
        setUserData(userResponse.data);

        if (userResponse.data.role === 'job_seeker') {
          const applicationsResponse = await api.get('/applications');
          setApplications(applicationsResponse.data);
        } else if (userResponse.data.role === 'employer') {
          const jobsResponse = await api.get('/jobs/posted');
          setPostedJobs(jobsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  if (!userData) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
        <Card className="mb-8">
          <Card.Header>
            <h2 className="text-2xl font-semibold">Welcome, {userData.name}!</h2>
          </Card.Header>
          <Card.Content>
            <p>Email: {userData.email}</p>
            <p>Role: {userData.role}</p>
          </Card.Content>
        </Card>

        {userData.role === 'job_seeker' && (
          <Card className="mb-8">
            <Card.Header>
              <h2 className="text-2xl font-semibold">Your Applications</h2>
            </Card.Header>
            <Card.Content>
              {applications.length > 0 ? (
                <ul>
                  {applications.map((app) => (
                    <li key={app._id} className="mb-2">
                      Applied to {app.job.title} at {app.job.company} on {new Date(app.createdAt).toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>You haven't applied to any jobs yet.</p>
              )}
            </Card.Content>
          </Card>
        )}

        {userData.role === 'employer' && (
          <Card className="mb-8">
            <Card.Header>
              <h2 className="text-2xl font-semibold">Your Posted Jobs</h2>
            </Card.Header>
            <Card.Content>
              {postedJobs.length > 0 ? (
                <ul>
                  {postedJobs.map((job) => (
                    <li key={job._id} className="mb-2">
                      {job.title} - {job.applications.length} application(s)
                    </li>
                  ))}
                </ul>
              ) : (
                <p>You haven't posted any jobs yet.</p>
              )}
            </Card.Content>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default DashboardPage;