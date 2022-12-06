import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Image, Container } from "semantic-ui-react";
function Profile() {
  const location = useLocation();
  return (
    <Container>
    <Card >
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{location.state.fullName}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2022</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content> */}
    </Card>
    </Container>
  );
}

export default Profile;
