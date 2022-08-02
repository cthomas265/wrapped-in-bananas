import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Signature from "./pages/signature";
import ClassCollage from './pages/classCollage';
import PetCollage from './pages/petCollage';

import Auth from "./utils/auth";
import DemoBook from "./pages/pageFlip";
import StudentPage from './pages/studentPage'
// import './pages/styles.scss'

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Auth.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/page' element={<StudentPage />} />
          {/* <Route path="/pageFlip" element={<DemoBook />} /> */}
          <Route path="/signature" element={<Signature />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classCollage" element={<ClassCollage />} />
          <Route path="/petCollage" element={<PetCollage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
