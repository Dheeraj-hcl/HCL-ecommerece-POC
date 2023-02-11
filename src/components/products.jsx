import React, { useState } from "react";
import { Grid, Image, Card, Button } from "semantic-ui-react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import "../App.css";
const GET_ALL_PRODUCTS = gql`
  query getProducts($id: Int) {
    allProductsData(id: $id) {
      id
      title
      description
      price
      thumbnail
      rating
    }
  }
`;

const GridExampleContainer = (props) => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: { id: 1 },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="productslist">
      {data.allProductsData &&
        data.allProductsData.slice(0, 21).map((item, index) => {
          return (
            <div key={index} value={index} onClick={()=> props.onclicked()}>
              <Card as={Link} to={`product/${item.id}`} >
                <Image className="card-image" src={item.thumbnail} ui={false} />
                <Card.Content>
                  <Card.Header>{item.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Card.Header>{item.rating}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Card.Header>{item.price}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Button fluid color="teal">
                    Buy Now
                  </Button>
                </Card.Content>
              </Card>
            </div>
          );
        })}
    </div>
  );
};
export default GridExampleContainer;
