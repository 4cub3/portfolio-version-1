import React from 'react';

const Container = ({ className, children }) => {
  return (
    <section className={`max-w-[1200px] mx-auto ${className}`}>{children}</section>
  );
};

export default Container;
