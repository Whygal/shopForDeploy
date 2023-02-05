const getProducts = async function () {
    try {
      const response = await fetch("https://8000/2");
      const answer = await response.json();
      console.log(answer)
    } catch (error) {
      console.log('error');
    }
  };
  getProducts()