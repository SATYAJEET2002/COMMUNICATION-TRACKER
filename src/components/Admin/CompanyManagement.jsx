import React, { useState, useEffect } from "react";
import "./CompanyManagement.css"; // Custom CSS for styling

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    periodicity: "2 weeks",
  });

  // Load companies from localStorage when the component mounts
  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem("companies"));
    if (storedCompanies) {
      setCompanies(storedCompanies);
    }
  }, []);

  // Save companies to localStorage whenever they change
  useEffect(() => {
    if (companies.length > 0) {
      localStorage.setItem("companies", JSON.stringify(companies));
    }
  }, [companies]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCompany = () => {
    if (form.name && form.location) {
      setCompanies([...companies, { ...form, id: Date.now() }]);
      setForm({
        name: "",
        location: "",
        linkedIn: "",
        emails: "",
        phoneNumbers: "",
        comments: "",
        periodicity: "2 weeks",
      });
    } else {
      alert("Please fill in all fields before adding a company.");
    }
  };

  const handleDeleteCompany = (id) => {
    const updatedCompanies = companies.filter((company) => company.id !== id);
    setCompanies(updatedCompanies);
  };

  return (
    <div className="company-management-container">
      <h2 className="title">Company Management</h2>
      <div className="form-container">
        <form className="company-form">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Company Name"
            className="form-input"
          />
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="form-input"
          />
          <input
            type="url"
            name="linkedIn"
            value={form.linkedIn}
            onChange={handleInputChange}
            placeholder="LinkedIn Profile"
            className="form-input"
          />
          <input
            type="text"
            name="emails"
            value={form.emails}
            onChange={handleInputChange}
            placeholder="Emails (comma-separated)"
            className="form-input"
          />
          <input
            type="text"
            name="phoneNumbers"
            value={form.phoneNumbers}
            onChange={handleInputChange}
            placeholder="Phone Numbers (comma-separated)"
            className="form-input"
          />
          <textarea
            name="comments"
            value={form.comments}
            onChange={handleInputChange}
            placeholder="Comments"
            className="form-textarea"
          />
          <button type="button" onClick={handleAddCompany} className="add-button">
            Add Company
          </button>
        </form>
      </div>

      <div className="companies-list">
        <h3>Companies List</h3>
        <ul>
          {companies.map((company) => (
            <li key={company.id} className="company-item">
              <span className="company-name">{company.name}</span> -{" "}
              <span className="company-location">{company.location}</span>
              <button
                onClick={() => handleDeleteCompany(company.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyManagement;
