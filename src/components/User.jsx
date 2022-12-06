import { useQuery, gql } from "@apollo/client";
const GET_USER = gql`
  query getUser($id: ID!){
    userProfile(id: $id) {
      id
      fullName
      phoneNumber
      email
    }
  }
`;

function DisplayUser(props) {
  const { loading, error, data } = useQuery(GET_USER,{
    variables: {id: props.id}
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const {id: userId,fullName,phoneNumber,email} = data.userProfile;
    console.log(data.userProfile)
  return ( 
    <div key={userId}>
      <h3>Full Name: {fullName}</h3>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default DisplayUser;
