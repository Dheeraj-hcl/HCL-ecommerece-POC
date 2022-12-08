import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Image, Grid, Button } from "semantic-ui-react";
import avatar from "./avatar.png";
function Profile(props) {
  const location = useLocation();
  const history = useNavigate();
  function logout() {
    history("/");
    props.onlogout();
  }
  return (
    <div className="profile">
      <Grid
        textAlign="center"
        style={{ height: "90vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 300, right: 50 }}>
          <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{location.state.fullName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>{location.state.email}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>{location.state.phoneNumber}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={logout} fluid color="teal">
                LogOut
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Profile;
