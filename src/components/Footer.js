import React from 'react';

function Footer() {
  return (
    <footer className="p-5 bg-gray-900 text-white text-center">
      <p>&copy; 2024 Mo Kaif Siddiqui. All Rights Reserved.</p>
      <div className="flex justify-center mt-4">
        <a href="https://linkedin.com/in/kaif8947" className="m-2 text-blue-400">LinkedIn</a>
        <a href="https://github.com/kaif8947" className="m-2 text-white">GitHub</a>
        <a href="https://leetcode.com/u/skaif8947/" className="m-2 text-orange-500">LeetCode</a>
      </div>
    </footer>
  );
}

export default Footer;
