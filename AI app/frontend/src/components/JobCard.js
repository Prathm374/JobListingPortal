import React from 'react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import Button from './ui/Button';

const JobCard = ({ job }) => {
  return (
    <Card className="mb-4">
      <Card.Content>
        <h3 className="text-xl font-semibold text-primary mb-2">{job.title}</h3>
        <p className="text-gray-600 mb-2">{job.company}</p>
        <p className="text-gray-500 mb-2">{job.location}</p>
        <p className="text-sm text-gray-700 mb-4">{job.description.substring(0, 150)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">Posted on: {new Date(job.postedDate).toLocaleDateString()}</span>
          <Link to={`/job/${job.id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
  );
};

export default JobCard;