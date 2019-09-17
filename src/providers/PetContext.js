import React from 'react';

const PetStateContext = React.createContext();

const usePetState = () => {
  const context = React.useContext(PetStateContext);
};
