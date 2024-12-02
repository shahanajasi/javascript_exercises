const fetchData = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
fetchData();


