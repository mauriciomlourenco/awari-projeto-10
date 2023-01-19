import { createContext, useCallback, useEffect, useState } from 'react';

export const AppContext = createContext({});

const getInitialState = (state) => {
  const localData = localStorage.getItem('projeto-10');

  if(!localData) {
    return [];
  }

  return JSON.parse(localData);

};

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getInitialState);

  const add = useCallback((item) => {
    setFavorites([...favorites, item]);
  }, [favorites]);

  const remove = useCallback((target) => {
    const filtered = favorites.filter(name => {
      return name !== target;
    });
    setFavorites(filtered);
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('projeto-10', JSON.stringify(favorites));

  }, [favorites]);

  return (
    <AppContext.Provider value={{ add, remove, favorites }}>
      {children}
    </AppContext.Provider>
  );
};
