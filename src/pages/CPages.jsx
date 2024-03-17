import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import { motion } from 'framer-motion'; 

//params allows me to pull up the keyword from the URL. e.g. Italian, American, French

function CPages() {
  
    const [cpages, setCPages] = useState([]);
    let params = useParams();

    const getCPages = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bde95be77e794741ab6024fa24eb125c&cuisine=${name}`);
      const recipes = await data.json();
      setCPages(recipes.results);
  };

    useEffect(() => {
      getCPages(params.type);
    }, [params.type]);

  
  return <Grid
  animate={{opacity:1}}
  initial={{opacity:0}}
  exit={{opacity:0}}
  transition={{duration:0.5}}
  >
      {cpages.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" +item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}

    </Grid>
  
}


 const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
 `;

 const Card = styled.div`
     img{
        width: 100%;
        border-radius: 2rem;
     }
     a {
       text-decoration: none
     }
     h4 {
       text-align: center;
       padding: 1rem;
     }
  `;
export default CPages;