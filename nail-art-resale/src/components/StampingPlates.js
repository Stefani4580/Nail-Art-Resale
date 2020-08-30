import React, {useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function StampingPlates() {
  const [stampingPlate, setStampingPlate] = useState({
    name: "",
    brand: "",
    price: "",
  });

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
<StampingPlatesTable />


      </Form>
    </div>
  );
}

export default StampingPlates;
