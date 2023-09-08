import React, { FC } from 'react';
import styles from './jobs.module.css';
import Proficiencies from './Proficiencies';

type JobItemProps = {
    job: {
      id: number;
      title: string;
      company: string;
      location: string;
      date: string;
      proficiencies: string[];
      specialisation: string;
    };
    onSelect: () => void;
  };
  

const JobItem: React.FC<JobItemProps> = ({ job, onSelect }) => {
    return (
    <div id={`job-item-${job.id}`} className="job-item border rounded-md mt-6 mx-8 md:transform md:transition md:duration-300 md:hover:scale-105" onClick={onSelect}>
    <div className="m-3">
    <div className="top-portion flex md:flex-row justify-between items-center">
        <div className="info-container flex flex-row mt-2 mx-2">
        <div className="company-icon">
            <img className="border rounded-md" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"></img>
        </div>
        <div className="job-info text-left ml-2">
            <p>{job.company}</p>
            <p className="font-bold">{job.title}</p>
        </div>
        </div>
        <span className="border rounded-md px-2 py-1 mx-2 font-mono bg-green-100 text-green-500 font-bold">
            <p>{job.specialisation}</p>
        </span>
      </div>
      <div className="listing-details flex ml-[56px] md:ml-[66px] items-center">
            <p className="text-green-500 font-bold">{job.date}</p>
            <div className="flex items-center mx-2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt h-4 w-3 mx-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="gray" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
                <p className="text-gray-500">{job.location}</p>
            </div>
        </div>
        <div className="border-t border-gray-300 mx-2"></div>
        <Proficiencies proficiencies={job.proficiencies}></Proficiencies>
    </div>
    </div>
  );
};

export default JobItem;
