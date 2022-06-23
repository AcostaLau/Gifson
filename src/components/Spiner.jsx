import { Spinner } from "react-bootstrap";
import styled from "styled-components";


export function Spiner() {
  return (
    <Container>
      <p>Cargando imagen...</p>
      <Spinner animation="border" role="status">
      </Spinner>
    </Container>
   
  );
}


const Container = styled.div`
    display: flex;
    jusify-content: center;
    align-items: center;
    width: 100%;
`