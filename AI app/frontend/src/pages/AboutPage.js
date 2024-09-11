import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';

const AboutPage = () => {
  const teamMembers = [
    { name: 'Jane Smith', role: 'CEO & Co-founder', image: '/placeholder.svg' },
    { name: 'John Johnson', role: 'CTO & Co-founder', image: '/placeholder.svg' },
    { name: 'Emily Brown', role: 'Head of Marketing', image: '/placeholder.svg' },
    { name: 'Michael Lee', role: 'Lead Developer', image: '/placeholder.svg' },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">About JobPortal</h1>
      <Card className="mb-8">
        <Card.Content>
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
          <p className="text-text mb-4">
            JobPortal is a leading online platform connecting job seekers with employers across various industries. Our mission is to make the job search and hiring process seamless and efficient for everyone involved.
          </p>
          <p className="text-text mb-4">
            Founded in 2023, we've quickly grown to become one of the most trusted job boards in the market. We pride ourselves on our user-friendly interface, powerful search algorithms, and commitment to helping both job seekers and employers achieve their goals.
          </p>
          <p className="text-text">
            Whether you're looking for your dream job or searching for the perfect candidate, JobPortal is here to help you every step of the way.
          </p>
        </Card.Content>
      </Card>
      <h2 className="text-2xl font-semibold text-primary mb-4">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <Card.Content>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-text text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;