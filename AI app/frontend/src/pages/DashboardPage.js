import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DashboardPage = () => {
  const recentApplications = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co', date: '2023-05-15', status: 'Under Review' },
    { id: 2, title: 'Product Manager', company: 'Startup Inc', date: '2023-05-10', status: 'Interviewing' },
    { id: 3, title: 'Data Scientist', company: 'Big Data Corp', date: '2023-05-05', status: 'Rejected' },
  ];

  const savedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Web Solutions', location: 'Remote' },
    { id: 2, title: 'UX Designer', company: 'Creative Agency', location: 'New York, NY' },
    { id: 3, title: 'Marketing Specialist', company: 'E-commerce Giant', location: 'Seattle, WA' },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold text-primary">Recent Applications</h2>
          </Card.Header>
          <Card.Content>
            <ul className="space-y-4">
              {recentApplications.map((app) => (
                <li key={app.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-text">{app.title}</h3>
                  <p className="text-sm text-gray-600">{app.company}</p>
                  <p className="text-sm text-gray-500">Applied on: {app.date}</p>
                  <p className="text-sm font-medium mt-1">
                    Status: <span className="text-primary">{app.status}</span>
                  </p>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4">View All Applications</Button>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold text-primary">Saved Jobs</h2>
          </Card.Header>
          <Card.Content>
            <ul className="space-y-4">
              {savedJobs.map((job) => (
                <li key={job.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-text">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4">View All Saved Jobs</Button>
          </Card.Content>
        </Card>
      </div>
      <Card className="mt-6">
        <Card.Header>
          <h2 className="text-xl font-semibold text-primary">Job Search Statistics</h2>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">15</p>
              <p className="text-sm text-gray-600">Total Applications</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-gray-600">Interviews Scheduled</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2</p>
              <p className="text-sm text-gray-600">Offers Received</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10</p>
              <p className="text-sm text-gray-600">Saved Jobs</p>
            </div>
          </div>
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default DashboardPage;