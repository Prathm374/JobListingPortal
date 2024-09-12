import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import api from '../utils/api';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get('/users/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleResumeUpload = async () => {
    if (!resume) {
      setUploadStatus('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const response = await api.post('/users/upload-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Resume uploaded successfully');
      setUser({ ...user, resume: response.data.resumePath });
    } catch (error) {
      console.error('Error uploading resume:', error);
      setUploadStatus('Error uploading resume. Please try again.');
    }
  };

  if (!user) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <Card className="max-w-2xl mx-auto">
        <Card.Header>
          <h2 className="text-2xl font-bold">User Profile</h2>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-sm text-gray-900">{user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <p className="mt-1 text-sm text-gray-900">{user.role}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Resume</label>
              {user.resume ? (
                <a href={`http://localhost:5000/${user.resume}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Current Resume
                </a>
              ) : (
                <p className="mt-1 text-sm text-gray-900">No resume uploaded</p>
              )}
            </div>
            <div>
              <Input
                type="file"
                accept=".pdf"
                onChange={handleResumeChange}
              />
              <Button onClick={handleResumeUpload} className="mt-2">
                Upload Resume
              </Button>
              {uploadStatus && <p className="mt-2 text-sm text-gray-600">{uploadStatus}</p>}
            </div>
          </div>
        </Card.Content>
      </Card>
    </Layout>
  );
}