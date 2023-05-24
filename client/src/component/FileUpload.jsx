import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle success message or further actions
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error message or further actions
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;