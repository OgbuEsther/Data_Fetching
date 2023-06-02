import React,{PropsWithChildren} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// https://api.escuelajs.co/api/v1/products

const ReadFiles:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      <Container>
        <Main>
          <Navs>
            <Button to ="/" bg='purple'>UseEffect</Button>
            <Button to ="/tanstack" bg = "blue">TanStack</Button>
            <Button to ="swr" bg = "black">SWR</Button>
          </Navs>
        </Main>
        <Holder>
          {children}
        </Holder>
      </Container>
    </div>
  )
}

export default ReadFiles


const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`


const Button = styled(Link)<{bg:string}>`
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
flex-direction: column;

padding-top: 50px;

`