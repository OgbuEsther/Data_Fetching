import React from 'react'
import styled from 'styled-components'
// https://api.escuelajs.co/api/v1/products

const ReadFiles = () => {
  return (
    <div>
      <Container>
        <Main>
          <Navs>
            <Button bg='purple'>UseEffect</Button>
            <Button bg = "blue">TanStack</Button>
            <Button bg = "black">SWR</Button>
          </Navs>
        </Main>
      </Container>
    </div>
  )
}

export default ReadFiles



const Button = styled.button<{bg:string}>`
margin-left: 20px;
margin-right: 20px;
border: 1px solid gray;
background-color: ${({bg}) => bg};
color: white;
width: 200px;
text-transform: uppercase;
font-weight: 700;
font-size: 14px;
height: 50px;
transition: all 350ms ease-in-out;


cursor: pointer;
:hover{
  transform: scale(0.99);
}

`

const Navs = styled.div``

const Main = styled.div``

const Container = styled.div`
width: 100%;
justify-content: center;
align-items: center;
display: flex;
padding-top: 50px;

`