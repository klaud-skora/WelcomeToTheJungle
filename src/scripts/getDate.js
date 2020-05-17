const getDate = () => { 
  const date = new Date();
  document.querySelector('.date').innerHTML = date.getFullYear(); 
};

export default getDate;