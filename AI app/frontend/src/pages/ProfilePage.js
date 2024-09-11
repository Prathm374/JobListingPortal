import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const ProfilePage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <Card.Content>
              <div className="flex flex-col items-center">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold text-text mb-2">John Doe</h2>
                <p className="text-gray-600 mb-4">Software Engineer</p>
                <Button variant="outline" className="w-full">Change Profile Picture</Button>
              </div>
            </Card.Content>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <Card.Header>
              <h2 className="text-xl font-semibold text-primary">Personal Information</h2>
            </Card.Header>
            <Card.Content>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="First Name" id="first-name" defaultValue="John" />
                  <Input label="Last Name" id="last-name" defaultValue="Doe" />
                </div>
                <Input label="Email" id="email" type="email" defaultValue="john.doe@example.com" />
                <Input label="Phone" id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                <Input label="Location" id="location" defaultValue="San Francisco, CA" />
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    defaultValue="Passionate software engineer with 5+ years of experience..."
                  ></textarea>
                </div>
                <Button type="submit">Save Changes</Button>
              </form>
            </Card.Content>
          </Card>
          <Card className="mt-6">
            <Card.Header>
              <h2 className="text-xl font-semibold text-primary">Resume</h2>
            </Card.Header>
            <Card.Content>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">john_doe_resume.pdf</p>
                  <p className="text-sm text-gray-500">Uploaded on May 1, 2023</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline">View</Button>
                  <Button variant="outline">Replace</Button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;