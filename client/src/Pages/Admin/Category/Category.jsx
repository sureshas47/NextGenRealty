import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigateTo = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}categories`);
        setCategories(response.data);
      } catch (err) {
        console.error("There was an error fetching the categories!", err);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = () => {
    navigateTo("/admin/category-add");
  };

  return (
    <>
      <Row className="mt-5 g-0">
        <Col xs="auto">
          <Button variant="primary" size="md" onClick={handleClick}>
            Add Category
          </Button>
        </Col>
      </Row>
      <Row className="table-responsive mt-5">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat._id}>
                <td>{index + 1}</td>
                <td>{cat.CategoryName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default Categories;
