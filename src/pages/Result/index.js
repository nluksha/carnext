import React from 'react';

import Content from '../../controls/Content';

const Result = props => {
  const { state } = props.location;
  const isSuccess = state && state.isSuccess;

  return (
    <Content title={isSuccess ? 'Congratulations, you won!' : 'Better luck next time!'}>
      Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to
      emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for
      mock-ups.
    </Content>
  );
};

export default Result;
