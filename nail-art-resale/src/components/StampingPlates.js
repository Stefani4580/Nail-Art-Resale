import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function StampingPlates() {
  const [stampingPlate, setStampingPlate] = useState({
    name: "",
    brand: "",
    price: "",
  });
  const [stampingPlates, setStampingPlates] = useState([]);
  const [stampingPlateId, setStampingPlateId] = useState([]);

  const getStampingPlateData = (e) => {
    const { value, id } = e.target;
    setStampingPlate({ ...stampingPlate, [id]: value });
  };

  const getStampingPlateId = (e) =>{
      setStampingPlateId(e.target.value);
  }

  async function createStampingPlate() {
    console.log("Inside createStampingPlate");
    try {
      const response = await axios.post(
        "http://localhost:8080/stampingplates",
        stampingPlate
      );

      let addForm = document.getElementById("add-form");
      addForm.reset();
      let updateForm = document.getElementById("update-form");
      updateForm.reset();

      getStampingPlates();
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
    try {
      const response = await axios.delete(
        `http://localhost:8080/stampingplates/stampingplate/${stampingPlateId}`
      );

      let deleteForm = document.getElementById("delete-form");
      deleteForm.reset();

      getStampingPlates();
      console.log("After API call");
      console.log(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const handleSubmit = (e) => {
    // console.log("Inside handleSubmit");
    e.preventDefault();
    createStampingPlate();
  };

  const handleUpdateSubmit = (e) => {
    // console.log("Inside handleUpdateSubmit");
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
      <tr id={id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <Form id="add-form" onChange={getStampingPlateData}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" id="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" id="brand" placeholder="Enter brand" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" id="price" placeholder="Enter price" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{stampingPlateRows}</tbody>
      </Table>
      <Form id="delete-form">
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" onChange={getStampingPlateId}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleDeleteSubmit}>
          Delete
        </Button>
      </Form>
      <Form id="update-form" onChange={getStampingPlateData}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" class="id" id="id" placeholder="Enter ID" onChange={getStampingPlateId} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"  id="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text"  id="brand" placeholder="Enter brand" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text"  id="price" placeholder="Enter price" />
        </Form.Group>

        <Button variant="primary"  type="submit" onClick={handleUpdateSubmit}  >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default StampingPlates;
