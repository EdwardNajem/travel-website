import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Head from '../components/head';
import Navbar from '../components/navbar';
import '../request.css';

export default function Request({  isLoggedin, setIsLoggedin }) {
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/viewRequest/`).then(
      (response) => {
        setTableData(response.data);
      }
    );
  }, []);

  const [formData, setFormData] = useState({
    packageType: '',
    numDays: 0,
    priceRange: '',
    accountid: 0,
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    if (!formData.packageType || formData.numDays < 0 || !formData.priceRange) {
      return;
    }

    Axios.post(`http://localhost:3001/api/request/`, {
      formData: formData,
    });

    setFormData({
      packageType: '',
      numDays: 0,
      priceRange: '',
      accountid: 0,
    });
  };

  const handleDeleteRow = (id, index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
    Axios.delete(`http://localhost:3001/api/deleteRequest/${id}`);
  };

  const handleEditRow = (id, index) => {
    if (!formData.packageType || formData.numDays < 0 || !formData.priceRange) {
      return;
    }
    Axios.put("http://localhost:3001/api/updateRequest/", {id, formData});
  };

  return (
    <div className="request">
      <Head />
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <div className="request-container">
        <h1 className="req-title">
          Please enter a package you want our agency to offer
        </h1>
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

          <button
            type="button"
            onClick={handleFormSubmit}
            className="form-button"
          >
            Request
          </button>
        </form>

        <table className="request-table">
          <thead>
            <tr>
              <th>Package Type</th>
              <th>Number of Days</th>
              <th>Price Range</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.typs}</td>
                <td>{row.days}</td>

                <td>{row.ranges}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleEditRow(row.id, index)}
                    className="row-delete"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDeleteRow(row.id, index)}
                    className="row-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      {!isLoggedin && (
        <Modal show={!isLoggedin} centered>
          <Modal.Header closeButton>
            <Modal.Title>Please LogIn First</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>In Order to purchase a package you have to Log In.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => navigate('/login')}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
