import Pages from "./pages/Pages";
import Cuisine from "./components/Cuisine";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiMagicLamp } from "react-icons/gi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiMagicLamp />
        <Logo to={"/"}>Gourmet Genie</Logo>
      </Nav>
      <Search />
      <Cuisine/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
   text-decoration: none;
   font-size: 2rem;
   font-weight: 400;
   font-family: 'Burbank', cursive;

`
const Nav = styled.div`
   padding: 4rem 0rem;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   svg{
    font-size: 5rem;
   }
`

export default App;
