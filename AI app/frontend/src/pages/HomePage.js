import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempted with:', email, password);
    // For now, let's just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-primary mb-4">Welcome to JobPortal</h1>
          <p className="text-xl text-text mb-8">Find your dream job or hire the perfect candidate</p>
          <div className="flex space-x-4">
            <Link to="/jobs">
              <Button variant="primary">Find Jobs</Button>
            </Link>
            <Link to="/post-job">
              <Button variant="secondary">Post a Job</Button>
            </Link>
          </div>
        </div>
        <Card className="md:w-1/2 max-w-md">
          <Card.Header>
            <h2 className="text-2xl font-semibold text-primary">Login</h2>
          </Card.Header>
          <Card.Content>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">Login</Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </Card.Content>
        </Card>
      </div>

      <Card className="mb-12">
        <Card.Header>
          <h2 className="text-2xl font-semibold text-primary">Quick Job Search</h2>
        </Card.Header>
        <Card.Content>
          <form className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <Input label="Job Title" id="job-title" placeholder="e.g. Software Engineer" />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <Input label="Location" id="location" placeholder="e.g. San Francisco, CA" />
            </div>
            <div className="w-full md:w-1/3 px-2 flex items-end">
              <Button className="w-full">Search Jobs</Button>
            </div>
          </form>
        </Card.Content>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <Card.Header>
            <h3 className="text-xl font-semibold text-primary">For Job Seekers</h3>
          </Card.Header>
          <Card.Content>
            <ul className="list-disc list-inside space-y-2">
              <li>Access thousands of job listings</li>
              <li>Create a professional profile</li>
              <li>Get matched with relevant opportunities</li>
              <li>Apply with just one click</li>
            </ul>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="text-xl font-semibold text-primary">For Employers</h3>
          </Card.Header>
          <Card.Content>
            <ul className="list-disc list-inside space-y-2">
              <li>Post job openings easily</li>
              <li>Browse candidate profiles</li>
              <li>Use advanced search filters</li>
              <li>Manage applications efficiently</li>
            </ul>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="text-xl font-semibold text-primary">Why Choose Us</h3>
          </Card.Header>
          <Card.Content>
            <ul className="list-disc list-inside space-y-2">
              <li>User-friendly interface</li>
              <li>Personalized job recommendations</li>
              <li>Verified company profiles</li>
              <li>24/7 customer support</li>
            </ul>
          </Card.Content>
        </Card>
      </div>
    </Layout>
  );
};

export default HomePage;