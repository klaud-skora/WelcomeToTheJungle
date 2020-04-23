export default function script() {
  const date = new Date();
  
  return {
    getData: function() {
      document.querySelector('.date').innerHTML = date.getFullYear();
    }
  }
}


