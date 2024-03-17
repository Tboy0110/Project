import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

function Vegan() {

  const [Vegan, setVegan]= useState([]);

  useEffect(() => {
    getVegan();
  },[]);
  
  const getVegan = async () => {  
    const check = localStorage.getItem("vegan");

    if(check){
      setVegan(JSON.parse(check));
    }else{
      const api = await fetch(
        'https://api.spoonacular.com/recipes/random?apiKey=bde95be77e794741ab6024fa24eb125c&number=8&Tags=Vegan'
      );
      const data = await api.json(); 

      localStorage.setItem("vegan",JSON.stringify(data.recipes));
      setVegan(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
  <div>
  <Wrapper>
    <h3>Vegan Meals</h3>
    <Splide options={{
      perPage: 3,
      arrow: false,
      drag: "free",
      gap: "5rem",
    }}
    > 
      {Vegan.map((recipe) => {
        return(
        <SplideSlide key={recipe.id}>
        <Card>
          <Link to={'recipe/'+ recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
          <Gradient/>
          </Link>
        </Card>
        </SplideSlide>
      );
    })}
    </Splide>
  </Wrapper>
</div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;

`;

const Card = styled.div`
  min-height: 30rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute; 
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 1000;
    font-size: 1rem;
    font-style: oblique;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0.5));
`
export default Vegan;