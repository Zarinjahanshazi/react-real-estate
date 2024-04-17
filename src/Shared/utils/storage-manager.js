export const setDataInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const getDataFromLocalStorage = (key) => {
    const str = localStorage.getItem(key);
    if (str.trim()) {
      return JSON.parse(str);
    }
  
    return null;
  };
  
  export const removeDataFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  