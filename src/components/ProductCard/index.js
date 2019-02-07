import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components'

const Wrapper = styled.div`
    text-align: center;
    width: 33%;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`

`;

const Title = styled.p`
    padding: 0.6em 0 0.2em;
`;


export default function ({name, image}) {
    return (
        <Wrapper >
            <Image src={image} />
            <Title>{name}</Title>
            <Button>Buy me</Button>
        </Wrapper>
    )
}
