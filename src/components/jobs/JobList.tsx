import React, { useState, useEffect } from 'react';
import './jobs.css';
import JobItem from './JobItem';

type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    date: string;
    proficiencies: string[];
    specialisation: string;
  };

const JobList: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [selectedJobId, setSelectedJobId] = useState<number | null>(1);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
        if (!isMobile && selectedJobId !== null) {
          document.getElementById(`job-item-${selectedJobId}`)?.classList.add('border-green-500');
        } else {
          if (selectedJobId !== null) {
            document.getElementById(`job-item-${selectedJobId}`)?.classList.remove('border-green-500');
          }
        }
      }, [isMobile, selectedJobId]);
  
    const onSelect = (jobId: number) => {
      if (!isMobile) {
        if (selectedJobId !== null) {
          document.getElementById(`job-item-${selectedJobId}`)?.classList.remove('border-green-500');
        }
        setSelectedJobId(jobId);
      }
    };

    const jobsData: Job[] = [
        { id: 1, title: 'Software Engineer', company: 'CyberNest', location: 'Singapore', date: 'about 3 hours ago', proficiencies: ['MVC', 'Angular', 'API', 'Java', 'MySQL', 'Spring'], specialisation: 'Fullstack' },
        { id: 2, title: 'Mobile Game Programmer', company: 'Quantum', location: 'Indonesia', date: 'about 8 hours ago', proficiencies: ['API', 'Swift', 'OOP', 'Android', 'Kotlin'], specialisation: 'Android' },
        { id: 3, title: 'iOS Developer', company: 'EcoGreen', location: 'Singapore', date: '1 day ago', proficiencies: ['API', 'Swift', 'OOP', 'JSON', 'iOS'], specialisation: 'iOS' },
        { id: 4, title: 'Frontend Engineer', company: 'FarmFresh', location: 'Malaysia', date: '2 days ago', proficiencies: ['React', 'API', 'Javascript', 'JQuery', 'HTML'], specialisation: 'Frontend' },
        { id: 5, title: 'Backend Engineer', company: 'Alphastream', location: 'Singapore', date: '2 days ago', proficiencies: ['Django', 'API', 'Postman', 'Python', '.NET', 'AWS'], specialisation: 'Backend' },
        { id: 6, title: 'Product Manager', company: 'SpaceFrontier', location: 'Philippines', date: '2 days ago', proficiencies: ['Analytics'], specialisation: 'PM' },
        { id: 7, title: 'Hybrid QA', company: 'AquaPure', location: 'Cambodia', date: '3 days ago', proficiencies: ['Selenium', 'Analytics', 'Postman'], specialisation: 'QA' },
        { id: 8, title: 'Data Scientist', company: 'NexaRobotics', location: 'Singapore', date: '3 days ago', proficiencies: ['Analytics', 'R', 'Python', 'Matplotlib'], specialisation: 'Data Sci' },
        { id: 9, title: 'System Developer', company: 'UrbanSky', location: 'Singapore', date: '3 days ago', proficiencies: ['Laravel', 'API', 'MySQL'], specialisation: 'SysOps' },
        { id: 10, title: 'Network Engineer', company: 'MindLuxe', location: 'Singapore', date: '3 days ago', proficiencies: ['Azure', 'Ansible', 'AWS'], specialisation: 'SysOps' },
      ];

      return (
        <div className="flex justify-center items-start h-full relative">
          <div className="flex-1 job-list overflow-y-auto">
            {jobsData.map((job) => (
              <JobItem key={job.id} job={job} onSelect={() => onSelect(job.id)} />
            ))}
          </div>
          <div className="listing-full hidden flex-1 flex flex-col justify-center items-center border rounded sticky top-0 h-screen mt-6 mx-8">
            <div className="text-center w-full flex justify-center items-center h-full">
              {selectedJobId
                ? jobsData.find((job) => job.id === selectedJobId)?.title
                : 'Select a job to see details.'}
            </div>
          </div>
        </div>
      );
};

export default JobList;
