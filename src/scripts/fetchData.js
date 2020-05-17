import axios from 'axios'

const fetchData = () => {
  return new Promise((resolve, reject) => {
      axios.get('https://api.pokemontcg.io/v1/cards?supertype=Pokemon&page=2&pagesize=1000')
      .then(res => {
          const images = [];
          res.data.cards.forEach(element => {
              images.push(element.imageUrl)
          });
          resolve(images);
      }).catch(err => { reject() })

  })
}
export default fetchData;