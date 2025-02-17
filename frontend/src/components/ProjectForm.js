import React, { useState, useEffect } from 'react';

const ProjectForm = ({ project, onSave }) => {
  const [formData, setFormData] = useState({ title: '', description: '', image_url: '' });

  useEffect(() => {
    if (project) {
      setFormData(project);
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        value={formData.image_url}
        onChange={handleChange}
      />
      <button type="submit">Save Project</button>
    </form>
  );
};

export default ProjectForm;
