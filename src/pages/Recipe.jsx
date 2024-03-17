import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions"); 

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=bde95be77e794741ab6024fa24eb125c`);
    const detailData = await data.json()
    setDetails(detailData); 
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  },[params.name]);

  return (
   <DetailWrapper>
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt=""/>
      <h2>Source: <a href={details.sourceUrl} target="_blank" rel="noopener noreferrer">{details.sourceUrl}</a></h2>
    </div>
    <Info>
      <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab('instructions')}>Instructions</Button>
      <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
      <Button className={activeTab === "summary" ? "active" : ""} onClick={() => setActiveTab("summary")}>Summary</Button>

      {activeTab === 'instructions' &&(
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
      )}
      {activeTab === 'summary' &&(
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
        </div>
      )}
      {activeTab === 'ingredients' &&(
        <ul>
          {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
      ))}
    </ul>
      )}
    </Info>
  </DetailWrapper>
  );
}




const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 10px;
  .active{
    background: linear-gradient(40deg, #000, #ADD8E6);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.5rem;
    line-height: 2%.5;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: black;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`
const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe;