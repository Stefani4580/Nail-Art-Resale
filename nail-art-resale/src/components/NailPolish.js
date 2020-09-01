import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function NailPolish() {
  const [nailPolish, setNailPolish] = useState({
    name: "",
    brand: "",
    color: "",
    price: "",
  });
  const [nailPolishes, setNailPolishes] = useState([]);
  const [nailPolishId, setNailPolishId] = useState([]);

  const getNailPolishData = (e) => {
    const { value, id } = e.target;
    setNailPolish({ ...nailPolish, [id]: value });
  };

  const getNailPolishId = (e) =>{
      setNailPolishId(e.target.value);
  }

  async function createNailPolish() {
    console.log("Inside createNailPolish");
    try {
      const response = await axios.post(
        "http://localhost:8080/nailpolishes",
        nailPolish
      );

      let addForm = document.getElementById("add-form");
      addForm.reset();
      getNailPolish();
      console.log("After API call");
      console.log(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const getNailPolish = async () => {
    try {
      const response = await axios.get("http://localhost:8080/nailpolishes");
      console.log(response.data);
      setNailPolishes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteNailPolish() {
    console.log("Inside deleteNailPolish");
    try {
      const response = await axios.delete(
        `http://localhost:8080/nailpolishes/nailpolish/${nailPolishId}`
      );

      let deleteForm = document.getElementById("delete-form");
      deleteForm.reset();

      getNailPolish();
      console.log("After API call");
      console.log(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const handleSubmit = (e) => {
    console.log("Inside handleSubmit");
    e.preventDefault();
    createNailPolish();
  };

  const handleDeleteSubmit = (e) => {
    console.log("Inside handleDeleteSubmit");
    e.preventDefault();
    deleteNailPolish();
  };

  useEffect(() => {
    getNailPolish();
  }, []);

  const nailPolishRows = nailPolishes.map((item, id) => {
    return (
      <tr id={id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.color}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <Form id="add-form" onChange={getNailPolishData}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" id="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" id="brand" placeholder="Enter brand" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" id="color" placeholder="Enter color" />
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
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{nailPolishRows}</tbody>
      </Table>
      <Form id="delete-form">
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" onChange={getNailPolishId}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleDeleteSubmit}>
          Delete
        </Button>
      </Form>
    </div>
  );
}

export default NailPolish;
