import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser() {
    userProfile(id: "user-0001") {
      id
      fullName
      phoneNumber
      email
    }
  }
`;

function DisplayUser() {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.users.map(({ id, fullName, phoneNumber, email }) => (
    <div key={id}>
      <h3>Full Name: {fullName}</h3>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {email}</p>
    </div>
  ));
}

export default DisplayUser;
