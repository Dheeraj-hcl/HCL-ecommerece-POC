import React from "react";
import { Grid, Image, Card, Button } from "semantic-ui-react";
import iphone14 from "./iphone14.jpg";
import iphone13 from "./iphone13.jfif";
import iphone13pro from './iphone13pro.jpg'
import samsungs from "./samsungs22.jpg"
const GridExampleContainer = () => (
  <Grid container columns={3}>
    <Grid.Column>
      <Card>
        <Image
          src={iphone14}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Iphone 14 </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>⭐⭐⭐⭐</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>$999.99</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button fluid color="teal">
            
            Buy Now
          </Button>
        </Card.Content>
      </Card>
      <Card>
        <Image
          src={iphone13}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Iphone 13</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>⭐⭐⭐⭐</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>$799.99</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button fluid color="teal">
            Buy Now
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card>
        <Image
          src={iphone13pro}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Iphone 13 pro</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>⭐⭐⭐⭐⭐</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>$899.99</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button fluid color="teal">
            Buy Now
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card>
        <Image
          src={samsungs}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Samsung Galaxy S22 Ultra</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>⭐⭐⭐</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>$650.50</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button fluid color="teal">
            Buy Now
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
);

export default GridExampleContainer;
