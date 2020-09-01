import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function NailArtAccessories() {
  const [nailArtAccessory, setNailArtAccessory] = useState({
    name: "",
    brand: "",
    type: "",
    price: "",
  });
  const [nailArtAccessories, setNailArtAccessories] = useState([]);
  const [nailArtAccessoryId, setNailArtAccessoryId] = useState([]);

  const getNailArtAccessoryData = (e) => {
    const { value, id } = e.target;
    setNailArtAccessory({ ...nailArtAccessory, [id]: value });
  };

  const getNailArtAccessoryId = (e) =>{
      setNailArtAccessoryId(e.target.value);
  }

  async function createNailArtAccessory() {
    console.log("Inside createNailArtAccessory");
    try {
      const response = await axios.post(
        "http://localhost:8080/nailartaccessories",
        nailArtAccessory
      );

      let addForm = document.getElementById("add-form");
      addForm.reset();
      getNailArtAccessory();
      console.log("After API call");
      console.log(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const getNailArtAccessory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/nailartaccessories");
      console.log(response.data);
      setNailArtAccessories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteNailArtAccessory() {
    console.log("Inside deleteNailArtAccessory");
    try {
      const response = await axios.delete(
        `http://localhost:8080/nailartaccessories/nailartaccessory/${nailArtAccessoryId}`
      );

      let deleteForm = document.getElementById("delete-form");
      deleteForm.reset();

      getNailArtAccessory();
      console.log("After API call");
      console.log(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const handleSubmit = (e) => {
    console.log("Inside handleSubmit");
    e.preventDefault();
    createNailArtAccessory();
  };

  const handleDeleteSubmit = (e) => {
    console.log("Inside handleDeleteSubmit");
    e.preventDefault();
    deleteNailArtAccessory();
  };

  useEffect(() => {
    getNailArtAccessory();
  }, []);

  const nailArtAccessoryRows = nailArtAccessories.map((item, id) => {
    return (
      <tr id={id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.type}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <Form id="add-form" onChange={getNailArtAccessoryData}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" id="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" id="brand" placeholder="Enter brand" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" id="type" placeholder="Enter type" />
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
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{nailArtAccessoryRows}</tbody>
      </Table>
      <Form id="delete-form">
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" onChange={getNailArtAccessoryId}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleDeleteSubmit}>
          Delete
        </Button>
      </Form>
    </div>
  );
}

export default NailArtAccessories;
