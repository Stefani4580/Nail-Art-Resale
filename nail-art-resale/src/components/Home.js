import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Home() {
  return (
    <div class="home">
      <Container className="title-div" fluid>
        <Jumbotron className="jumbo">
          <h1>Nail Art Resale</h1>
          <p>
           Nail Art Resale is the place for the Nail Art Hobbyist to come sell Nail Art Supplies.
          </p>

          <p>
            Nail Art Resale is your one stop shop for all things Nail Art. Have Stamping Plates that you never use? We've got you! That Nail Polish doesn't quite look good on you? We've got you! Have a shelf full of Pigments, Flakes and Powders gathering dust? We've got you! At Nail Art Resale, you can sell your Stamping Plates, Nail Polish and Nail Art Accessories to make a little money to buy <strong>more</strong> Stamping Plates, Nail Polish and Nail Art Accessories.
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
