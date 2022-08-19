import axios from 'axios';
import React, { useState } from 'react';

function Notes() {
  const [selectedFiles, setSelectedFiles] = useState();

  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFiles(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', selectedFiles);

    axios
      .post('//localhost:8000/upload', data)
      .then((e) => {
        console.log('Success');
      })
      .catch((e) => {
        console.log('Error', e);
      });
  };
  return (
    <div className="notes-container m-4 flex flex-col items-center ">
      <div className="top-container flex justify-center m-2">
        <input type="file" name="file" onChange={changeHandler} />

        {isSelected ? (
          <div>
            <p>Filename: {selectedFiles.name}</p>
            <p>Filetype: {selectedFiles.type}</p>
            <p>Size in bytes: {selectedFiles.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFiles.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}

        <button
          className="upload bg-green-200 py-1 px-2"
          onClick={handleSubmission}
        >
          Upload
        </button>
      </div>
      <div className="bottom-container bg-red-200 h-60 w-40">
        <div className="card-container">file</div>
      </div>
    </div>
  );
}

export default Notes;
