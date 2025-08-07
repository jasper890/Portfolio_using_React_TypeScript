import React, { useState } from 'react';
import UdemyWeb from '../assets/udemyCertiResponsiveWebhtmljs.jpg';
import UdemyDesign from '../assets/udemy_certiWebDesign.jpg';
import DICT from '../assets/dictJpeg.jpg';
import DICTBage from '../assets/CiscoBage.jpg';

type Certification = {
  id: number;
  title: string;
  issuer: string;
  image: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Responsive Web Design with HTML & JS',
    issuer: 'Udemy',
    image: UdemyWeb,
  },
  {
    id: 2,
    title: 'Web Design Principles',
    issuer: 'Udemy',
    image: UdemyDesign,
  },
  {
    id: 3,
    title: 'JavaScript Essentials 1 completed',
    issuer: 'DICT',
    image: DICT,
  },
  {
    id: 4,
    title: 'Cisco Networking Basics',
    issuer: 'Cisco Badge',
    image: DICTBage,
  },
];

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="certifications" className="pt-20 text-white overflow-x-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Certifications</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          These certifications showcase my commitment to continuous learning and skill-building across technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {certifications.map(cert => (
          <div
            key={cert.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={() => openModal(cert.image)}
          >
            <div className="h-64 overflow-hidden bg-white flex items-center justify-center p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400">Issued by: {cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
        >
          <img
            src={selectedImage}
            alt="Full Certificate"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;
