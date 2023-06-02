import React from "react";

import styled from "styled-components";
import { useFetch } from "../hooks/UseFetch";

const UseEffect = () => {
  const state = useFetch();
  
  return (
    <div>
      <h3>UseEffect</h3>
      <div>
        <Card>
         {
            state?.map((el:any) =>(
                <Container>
                <Image src={el?.images[0]} loading="lazy" />
              </Container>
            ))
         }
        </Card>
      </div>
    </div>
  );
};

export default UseEffect;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  overflow: hidden;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
