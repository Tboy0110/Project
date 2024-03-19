import {FaPizzaSlice} from 'react-icons/fa';
import {GiNoodles, GiFrenchFries, GiCroissant, GiNachos, GiCorn, GiAfrica} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Cuisine() {
  return (
    <Options>
        <SLink to={'/cuisines/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisines/Chinese'}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </SLink>
        <SLink to={'/cuisines/American'}>
            <GiFrenchFries/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisines/French'}>
            <GiCroissant/>
            <h4>French</h4>
        </SLink>
        <SLink to={'/cuisines/Spanish'}>
            <GiNachos/>
            <h4>Spanish</h4>
        </SLink>
        <SLink to={'/cuisines/Caribbean'}>
            <GiCorn/>
            <h4>Caribbean</h4>
        </SLink>
        <SLink to={'/cuisines/African'}>
            <GiAfrica/>
            <h4>African</h4>
        </SLink>
    </Options>
  );
}

export default Cuisine

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
  background: linear-gradient(40deg, #000, #ADD8E6);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.9);

  h4 {
    color: white;
    font-size: 1rem;
  }

  svg{
    color: white;
    font-size: 2.5rem;
  }
  &.active{
    background: linear-gradient( #1c08ce, #db2e45);

    svg{
      color: white;
    }
    h4{
      color: white;
    }
  }
`;