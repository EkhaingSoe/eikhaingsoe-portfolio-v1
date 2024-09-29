import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
