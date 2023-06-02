import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTan } from "../hooks/UseTan";
import styled from "styled-components";

const TanStack = () => {
  const client = new QueryClient();
  // const read = useTan()
  const { isLoading, data } = useTan();

  return (
    <>
      {isLoading ? (
        <div>Loading Data!!!!</div>
      ) : (
        <>
          <div>
            <h3>UseEffect</h3>
            <div>
              <Card>
                {data?.data?.map((el: any) => (
                  <Container>
                    <Image src={el?.images[0]} loading="lazy" />
                  </Container>
                ))}
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TanStack;

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
