import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  border-radius: 999px;
  overflow: hidden;
  border: solid 2px lightgray;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
`;

interface Props {
  src: string;
}

const Avatar = (props: Props) => {
  return (
    <ImageContainer>
      <Image src={props.src} />
    </ImageContainer>
  );
};

export default Avatar;
