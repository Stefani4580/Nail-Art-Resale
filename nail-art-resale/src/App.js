import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";

function App() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  // let data = {
  //   name: name,
  //   brand: brand,
  //   price: price
  // }

  const getName = (e) => {
    setName(e.target.value);
  }

  const getBrand = (e) => {
    setBrand(e.target.value);
  }

  const getPrice = (e) => {
    setPrice(e.target.value);
  }


  async function createStampingPlate(e) {
    console.log("Inside createStampingPlate");
    try {
     const response = await axios.post('http://localhost:8080/stampingplates', 
    {
      name: name,
      brand: brand,
      price: price
    }); 
    console.log("After API call");
     console.log(response.data);
    } catch (error) {
      console.log("error: ", error);      
    }
  }

  const handleSubmit = (e) =>{
    console.log('Inside handleSubmit');
    e.preventDefault();
    createStampingPlate();
  }



  return (
    <div className="App">
      <Form>
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" onChange={getName}/>
  </Form.Group>

  <Form.Group>
    <Form.Label>Brand</Form.Label>
    <Form.Control type="text" placeholder="Enter brand" onChange={getBrand} />
  </Form.Group>

  <Form.Group>
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Enter price" onChange={getPrice}/>
  </Form.Group>
 <Button variant="primary" type="submit" onClick={handleSubmit} >
   Submit
</Button>
</Form>
    </div>
  );
}

export default App;
