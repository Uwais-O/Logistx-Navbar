import React from 'react';
import styled from 'styled-components';

const DriversText = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 50px;
height: 70vh;
`
const Drivers: React.FunctionComponent = () => {
    return (
        <DriversText>
            <h1>Drivers</h1>
        </DriversText>
    )
}

export default Drivers