import styled from 'styled-components';

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  
`;

export const ListContainer = styled.div`
  background: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  
`;

export const InputStyle = styled.input`
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 20px;
  text-indent: 10px;
  height: 40px;
  width: 180px;
  
`;

export const ButtonStyle = styled.button`
  background: gray;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 5px;
  color: #f7f7f7;
  cursor: pointer;
  margin-left: 20px;
  font-size: 20px;
  padding: 10px;
  height: 40px;
  outline: none;

  &:hover {
    background-color: #f7f7f7;
    transition: .8s ease-out;
    color: #000;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  
`;

export const Item = styled.li ` 
  background: gray;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  color: #f7f7f7;
  font-size: 20px;
  font-weight: 400;
  list-style-type: none;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background: #f7f7f7;
    color: #000;
    transition: .8s ease-out;
  }
  
`;