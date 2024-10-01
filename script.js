const products = [
    {
     name:"CRYSTAL AGATE PHONE GRIP ",
      image:'crystal.png'
    },
    {
        name:"CRYSTAL AGATE PHONE GRIP ",
        image:'crystal.png'
      },
      {
        name:"CRYSTAL AGATE PHONE GRIP ",
        image:'crystal.png'
      },
      {
        name:"CRYSTAL AGATE PHONE GRIP ",
        image:'crystal.png'
      },
      {
        name:"CRYSTAL AGATE PHONE GRIP ",
        image:'crystal.png'
      },
      {
        name:"CRYSTAL AGATE PHONE GRIP ",
        image:'crystal.png'
      },
      {
        name:"CRYSTAL AGATE PHONE GRIP ",
        image:'crystal.png'
      },
      {
        name:"CRYSTAL AGATE PHONE GRIP ",
        image:'crystal.png'
      },
    
   
  ];
  
  // Function to render product list
  function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the container before rendering
  
    products.forEach(product => {
      // Create a div for each product
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      // Product image
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productCard.appendChild(productImage);
  
      // Product name
      const productName = document.createElement('h3');
      productName.innerHTML = product.name+"<span>18.99$</span>";
      productName.classList.add("productname")
      productCard.appendChild(productName);
  
      // Product price
      const productbutton = document.createElement('button');
      productbutton.innerText = 'BUY NOW';
      productbutton.classList.add('buytbutton')
      productCard.appendChild(productbutton);
  
      // Append the product card to the container
      productList.appendChild(productCard);
    });
  }
  
  // Call the function to render products on page load
  renderProducts();

  document.querySelector('#aboutbutton').addEventListener('click',()=>{
       document.querySelector("#animation").classList.add("translate-x-[105%]")
  })
 

  document.querySelector('#shopnow').addEventListener('click',()=>{
    document.querySelector("#animation").classList.remove("translate-x-[105%]")
})