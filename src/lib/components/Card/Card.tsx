import React from 'react';
import "./Card.scss";


const Card: React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export {Card};