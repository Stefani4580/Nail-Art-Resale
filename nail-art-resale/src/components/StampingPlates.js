import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";

function StampingPlates() {
  const [stampingPlate, setStampingPlate] = useState({
    name: "",
    brand: "",
    price: "",
  });
  const [stampingPlates, setStampingPlates] = useState([]);

  const getName = (e) => {
    setStampingPlate({ ...stampingPlate, name: e.target.value });
  };

  const getBrand = (e) => {
    setStampingPlate({ ...stampingPlate, brand: e.target.value });
  };

  const getPrice = (e) => {
    // setPrice(e.target.value);
  };

  const getPlateId = (e) => {
    // setPlateId(e.target.value);
  };

  async function createStampingPlate() {
    console.log("Inside createStampingPlate");
    try {
      const response = await axios.post(
        "http://localhost:8080/stampingplates",
        stampingPlate
      );
      console.log("After API call");
      console.log(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const getStampingPlates = async () => {
    try {
      const response = await axios.get("http://localhost:8080/stampingplates");
      console.log(response.data);
      setStampingPlates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteStampingPlate() {
    console.log("Inside deleteStampingPlate");
    // try {
    //   const response = await axios.delete(
    //     `http://localhost:8080/stampingplates/stampingplate/${plateId}`
    //   );
    //   console.log("After API call");
    //   console.log(response.data);
    // } catch (error) {
    //   console.log("error: ", error);
    // }
  }

  const handleSubmit = (e) => {
    console.log("Inside handleSubmit");
    e.preventDefault();
    createStampingPlate();
  };

  const handleDeleteSubmit = (e) => {
    console.log("Inside handleDeleteSubmit");
    e.preventDefault();
    deleteStampingPlate();
  };

  useEffect(() => {
    getStampingPlates();
  }, []);

  const stampingPlateRows = stampingPlates.map((item, id) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.price}</td>
        <td>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </td>
      </tr>
    );
  });

  return (
    <div className="App">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={getName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brand"
            onChange={getBrand}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            onChange={getPrice}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>delete?</th>
          </tr>
        </thead>
        <tbody>{stampingPlateRows}</tbody>
      </Table>
    </div>
  );
}

export default StampingPlates;
