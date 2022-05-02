import React, { useState } from 'react';
import styled from 'styled-components';

const MainpageStyle = styled.div`
    height: 100%;
    width: 100%;
    background-color: aqua;
`

const Mainpage = () => {
    const [ state, setState ] = useState(0);
  return (
      <MainpageStyle onClick={() => setState(state+1)} >
          MAinPagE
      </MainpageStyle>
  );
}

export default Mainpage