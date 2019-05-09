import React from 'react';

import './styles.css';

const Content = ({ title, children }) => (
  <section className="content">
    <h1 className="content__title">{title}</h1>
    <p className="content__text">{children}</p>
  </section>
);

export default Content;
