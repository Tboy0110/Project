import {FaFish} from 'react-icons/fa';
import {GiMeat,GiCrab, GiTacos } from 'react-icons/gi';
import {BiSushi} from'react-icons/bi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function CuisineBottom() {
  return (
    
    <Options>
        <SLink to={'/cuisines/British'}>
            <FaFish/>
            <h4>British</h4>
        </SLink>
        <SLink to={'/cuisines/Greek'}>
            <GiMeat/>
            <h4>Greek</h4>
        </SLink>
        <SLink to={'/cuisines/Mediterranean'}>
            <GiCrab/>
            <h4>Mediterranean</h4>
        </SLink>
        <SLink to={'/cuisines/Japanese'}>
            <BiSushi/>
            <h4>Japanese</h4>
        </SLink>
        <SLink to={'/cuisines/Mexican'}>
            <GiTacos/>
            <h4>Spanish</h4>
        </SLink>
    </Options>
  );
}

export default CuisineBottom

const Options = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  font-size: 4rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 3rem;
  text-decoration: none;
  background: linear-gradient(40deg, #000, #0adf27);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.9);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg{
    color: white;
    font-size: 2.5rem;
  }
  &.active{
    background: linear-gradient( #ceb008, #6b0311);

    svg{
      color: white;
    }
    h4{
      color: white;
    }
  }
`;