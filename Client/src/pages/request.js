import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from '../components/head';
import { useState } from 'react';
import '../request.css'; 

export default function Request() {
  const [formData, setFormData] = useState({
    packageType: '',
    numDays: 0,
    priceRange: '',
  });


  
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    if ( !formData.packageType || formData.numDays < 0 || !formData.priceRange) {
      




      return;
    }

    setTableData([...tableData, formData]);
    setFormData({
      packageType: '',
      numDays: 0,
     
      priceRange: '',
    });
  };

  const handleDeleteRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  return (
    <div className="request">
      <Head />
      <Navbar />

      <div className="request-container">
        <h1 className="req-title" >Please enter a package you want our agency to offer</h1>
        <form className="request-form">

          <label htmlFor="packageType" className="form-label">
            Package Type:
          </label>
          <select
            id="packageType"
            name="packageType"
            value={formData.packageType}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select a package type</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
          <br />
          <br />

          <label htmlFor="numDays" className="form-label">
            Number of Days:
          </label>
          <input
            type="number"
            id="numDays"
            name="numDays"
            value={formData.numDays}
            onChange={handleInputChange}
            min="0"
            className="form-input"
          />
          <br />
          <br />

      
          <label htmlFor="priceRange" className="form-label">
            Price Range:
          </label>
          <select
            id="priceRange"
            name="priceRange"
            value={formData.priceRange}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select a price range</option>
            <option value="low">Low ($1000 - $2000)</option>
            <option value="medium">Medium ($2000 - $4000)</option>
            <option value="high">High ($4000+)</option>
          </select>
          <br />
          <br />

          <button type="button" onClick={handleFormSubmit} className="form-button">
            Request
          </button>
        </form>

        <table className="request-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Package Type</th>
              <th>Number of Days</th>
         
              <th>Price Range</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.destination}</td>
                <td>{row.packageType}</td>
                <td>{row.numDays}</td>
               
                <td>{row.priceRange}</td>
                <td>
                  <button type="button" onClick={() => handleDeleteRow(index)} className="row-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
