import React from "react";
import styled from "styled-components";

const HomeText = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
height: 70vh;
`
const Home: React.FunctionComponent = () => {
    return (
        <HomeText>
            <h1>Home</h1>
        </HomeText>
    )
}

export default Home