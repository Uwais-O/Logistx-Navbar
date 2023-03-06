import React
 from "react"; 
 import styled from "styled-components";
 
 const RoutesText = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 50px;
 height: 70vh;
 `

 const Routes: React.FunctionComponent = () => {
        return (
            <RoutesText>
                <h1>Routes</h1>
            </RoutesText>
        )
    }
export default Routes