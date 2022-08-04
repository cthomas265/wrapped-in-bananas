import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USER } from "../utils/queries";
import Auth from "../utils/auth";
//import mantine
import { Image, Button } from '@mantine/core';


const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = Auth.loggedIn();
  console.log(currentUser?.data?._id)
  const { loading, error, data } = useQuery(USER, {
    variables: {
      _id: currentUser.data._id,
      email: currentUser.data.email,
      username: currentUser.data.username,
    },
  });
  console.log(data?.user)
  if (!currentUser) {
    navigate("/login");
  }
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  //   console.log(data);

  const user = data?.user;
  if (!user) {
    return "No user found";
  }

  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <Button onClick={Auth.logout} color="cyan" >Log Out</Button>
      <div>
        <Image 
            width={1500}
            height={800}
            src={require ('./images/class-background.JPEG')}
            alt='class background'
        />
     </div>
    </div>
  );
};

export default Dashboard;
