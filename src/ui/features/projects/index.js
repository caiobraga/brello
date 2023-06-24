import React, { useState } from 'react';

const ProjectScreen = () => {
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform project creation logic here
    // using the entered project name
    console.log(`Creating project: ${projectName}`);
    setProjectName('');
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProjectScreen;
