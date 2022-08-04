import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";
import Dashboard from "./pages/dashboard";
import Signature from "./pages/signature";
import MessageBoard from "./pages/messageBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Auth from "./utils/auth";
import StudentPage from './pages/studentPage'

import {ClassCollage, PetCollage} from './pages/collage';
import LoginAndSignup from './pages/loginAndSignup';

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
        <Header />
        <Routes>
          <Route path="/" element={<LoginAndSignup />} />
          <Route path='/page' element={<StudentPage />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messageBoard" element={<MessageBoard />} />
          <Route path="/classCollage" element={<ClassCollage />} />
          <Route path="/petCollage" element={<PetCollage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>

  );
}

export default App;
