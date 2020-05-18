const hideLoader = () => {
  const loaders = document.querySelectorAll('.loading-data');
  loaders.forEach(loader => loader.classList.add('hidden'));
}

export default hideLoader;