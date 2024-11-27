// HTML ELEMENTS
    const productsContainer = document.getElementById("productsContainer");
    const newContainer = document.getElementById("newContainer");
    const header = document.querySelector(".header");
    const contactusContainer = document.getElementById("contactus");
    const categoriesContainer = document.getElementById("categoriesContainer");
    const cartsideContainer = document.getElementById("cartside");
    const productTitle = document.querySelector(".ptitle")
    const categoriesTitle = document.querySelector(".ctitle")
    let cartData = [];


    jQuery(function(){
      $(".load").fadeOut(3000, function(){
          $("body").css({overflow:"auto"});
      });
    })
    

    // // Function to display error messages
    function displayError(message) {
        productsContainer.innerHTML = `<div class="error-message bg-red-500 col-span-12 text-white p-4 rounded-md">${message}</div>`;
        document.querySelector(".homePage").classList.add("hidden")
      }

    // Function to fetch all products
    async function getAllData() {
      $(".load").fadeIn(100)
        try {
            var response = await fetch("https://dummyjson.com/products");
            if (!response.ok) throw new Error("Failed to fetch data.");
            var data = await response.json();
            document.querySelector(".homePage").classList.add("hidden")
            console.log(data)
            displayProducts(data.products.splice(0,14));
            getMensShirts()
        } catch (error) {
            console.error("Error fetching all products:", error);
            displayError("Failed to load products. Please try again later.");
        }
        $(".load").fadeOut(1000)
    }
    async function getMensShirts() {
      $(".load").fadeIn(100)
        try {
            var response = await fetch("https://dummyjson.com/products/category/mens-shirts");
            if (!response.ok) throw new Error("Failed to fetch data.");
            var data = await response.json();
            document.querySelector(".homePage").classList.add("hidden")
            displayProducts(data.products);
        } catch (error) {
            console.error("Error fetching all products:", error);
            displayError("Failed to load products. Please try again later.");
        }
        $(".load").fadeOut(1000)
    }

    async function getProductDetails(productId) {
      $(".load").fadeIn(100)
            productsContainer.innerHTML=""
        try {
            var response = await fetch(`https://dummyjson.com/products/${productId}`);
            if (!response.ok) throw new Error("Failed to fetch data.");
            var data = await response.json();
            document.querySelector(".homePage").classList.add("hidden")
            displayProductDetails(data);
        } catch (error) {
            console.error("Error fetching all products:", error);
            displayError("Failed to load products. Please try again later.");
        }
        $(".load").fadeOut(1000)
    }
    async function getCardDetails(productId) {

        try {
            var response = await fetch(`https://dummyjson.com/products/${productId}`);
            if (!response.ok) throw new Error("Failed to fetch data.");
            var data = await response.json();
            displayCart(data);
        } catch (error) {
            console.error("Error fetching all products:", error);
            displayError("Failed to load products. Please try again later.");
        }
        
    }


    async function getCategories() {
      $(".load").fadeIn(100)
        try {
            var response = await fetch("https://dummyjson.com/products/categories");
            if (!response.ok) throw new Error("Failed to fetch data.");
            var data = await response.json();
            displayCategories(data.splice(0,11));
        } catch (error) {
            console.error("Error fetching all products:", error);
            displayError("Failed to load products. Please try again later.");
        }
        $(".load").fadeOut(1000)
    }

    async function getCategoryProducts(category){
      $(".load").fadeIn(100)
      try {
        var response = await fetch(`https://dummyjson.com/products/category/${category}`);
        if (!response.ok) throw new Error("Failed to fetch data.");
        var data = await response.json();
        productTitle.classList.remove("hidden")
        productTitle.firstElementChild.innerHTML=`${category} Products`
        categoriesTitle.classList.add("hidden")
        categoriesContainer.innerHTML=""
        displayProducts(data.products);
    } catch (error) {
        console.error("Error fetching all products:", error);
        displayError("Failed to load products. Please try again later.");
    }
    $(".load").fadeOut(1000)
  }

    async function newProducts() {
      $(".load").fadeIn(100)
        try {
            var response = await fetch("https://dummyjson.com/products");
            if (!response.ok) throw new Error("Failed to fetch data.");
            var data = await response.json();
            displayNews(data.products.slice(0, 8));
        } catch (error) {
            console.error("Error fetching all products:", error);
            displayError("Failed to load products. Please try again later.");
        }
        $(".load").fadeOut(1000)
    }
newProducts()


function homePage(){
  $(".load").fadeIn(100)
  productsContainer.innerHTML=""
  contactusContainer.innerHTML=""
  categoriesContainer.innerHTML=""
  productTitle.classList.add("hidden")
  header.classList.remove("hidden")
  header.classList.add("min-h-screen")
  categoriesTitle.classList.add("hidden")
  document.querySelector(".homePage").classList.remove("hidden")
  header.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/05/96/62/65/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg')";
  newProducts()
  $(".load").fadeOut(1000)
}

function productsPage(){
  productTitle.classList.remove("hidden")
  header.classList.add("hidden")
  $(header.children[1].children[2]).addClass("hidden");
  categoriesTitle.classList.add("hidden")
  contactusContainer.innerHTML=""
  categoriesContainer.innerHTML=""
  productsContainer.innerHTML=""
  productTitle.firstElementChild.innerHTML=`Our Products`
    getAllData()
}


function contactPage(){
  $(".load").fadeIn(100)
categoriesContainer.innerHTML=""
  header.classList.add("hidden")
  productTitle.classList.add("hidden")
  categoriesTitle.classList.add("hidden")
  document.querySelector(".homePage").classList.add("hidden") 
  header.classList.remove("min-h-screen")
   displayContactPage()
   $(".load").fadeOut(1000)
}


function categoriesPage(){
  categoriesTitle.classList.remove("hidden")
  productTitle.classList.add("hidden")
  header.classList.add("min-h-screen")
  header.classList.add("hidden")
  document.querySelector(".homePage").classList.add("hidden")
  getCategories()
}

    // Function to display products
    function displayCategories(arr) {
        productsContainer.innerHTML = ""; 
        contactusContainer.innerHTML="";
        const iconArray = [
          '<i class="fa-solid fa-paintbrush',
          '<i class="fa-solid fa-wine-bottle',
          '<i class="fa-solid fa-couch',
          '<i class="fa-solid fa-carrot',
          '<i class="fa-solid fa-tree',
          '<i class="fa-solid fa-mug-hot',
          '<i class="fa-solid fa-laptop',
          '<i class="fa-solid fa-shirt',
          '<i class="fa-solid fa-shoe-prints',
          '<i class="fa-solid fa-clock',
          '<i class="fa-solid fa-mobile',
      ];
  
        const catArray=["beauty.webp","fregrance.avif","furniture.webp","groceries.jpg","decor.jpg","kitchen.jpg","lap.webp","mens.jpg","shose.webp","watches.avif","mobile.jpg"]
        for (var i = 0; i < arr.length ; i++) {
            categoriesContainer.innerHTML += `
        <div class="col-span-12 md:col-span-6 lg:col-span-3 " onclick="getCategoryProducts('${arr[i].slug}')">
          <div class="flex items-center justify-center flex-col gap-6 hover:scale-95 hover:transition hover:duration-500 cursor-pointer group">
            <div class="w-72 h-72 rounded-full overflow-hidden bg-slate-500 group-hover:shadow-2xl group-hover:shadow-rose-300 group-hover:transition group-hover:duration-500">
              <img src="./imgs/${catArray[i]}" alt="" class="w-full h-full">
            </div>
            <h3 class="text-3xl font-semibold">${arr[i].name} ${iconArray[i]} bg-gradient-to-r from-rose-700 via-rose-500 to-rose-900 text-transparent bg-clip-text"></i></h3>
          </div>
        </div>
            `;
        }
    }


    function displayProducts(arr) {
        for (var i = 0; i < arr.length; i++) {
            productsContainer.innerHTML += `
      <div  class="col-span-12 md:col-span-6 lg:col-span-3 rounded-2xl relative hover:scale-105 hover:transition hover:duration-500 cursor-pointer shadow-lg" >
                  <div class="image" onclick="getProductDetails('${arr[i].id}')">
                      <img src="${arr[i].images[0]}" alt="" class="rounded-xl w-full h-72 object-contain">
                  </div>
                  <div class="card-info px-3 py-2 mt-5">
                      <h3 class="text-2xl font-bold line-clamp-1">${arr[i].title}</h3>
                      <p class="mt-4 line-clamp-3">${arr[i].description}</p>
                      <p class="mt-3 font-semibold text-lg">Price: <span class="font-bold text-rose-700">$${arr[i].price}</span></p>
                
                      <button onclick="getCardDetails('${arr[i].id}')" class="btn bg-rose-900 text-white my-2 w-full hover:bg-rose-800">Add to Cart</button>
                  </div>
                  <div class="fav absolute bg-gray-400 bg-opacity-60 p-3 rounded-full w-12 h-12 flex items-center justify-center right-5 top-4 shadow-xl cursor-pointer">
                      <i class="fa-solid fa-heart text-2xl favBtn"></i>
                  </div>
              </div>
            `;
        }

      // add to favorite icon changes
      document.querySelectorAll(".favBtn").forEach((btn) => {
        btn.addEventListener("click", function() {
            this.classList.toggle("text-red-500"); 
        });
    });

        // increase and decrease counter
        productsContainer.addEventListener("click", function(event) {
          // Check if a plus button was clicked
          if (event.target.classList.contains("plusBtn")) {
              const counterElement = event.target.previousElementSibling;
              let count = parseInt(counterElement.textContent);
              counterElement.textContent = count + 1;
          }
          
          // Check if a minus button was clicked
          if (event.target.classList.contains("minusBtn")) {
              const counterElement = event.target.nextElementSibling;
              let count = parseInt(counterElement.textContent);
              if (count > 0) { // Prevent negative count
                  counterElement.textContent = count - 1;
              }
          }
      });

    }



    function displayNews(arr) {
      newContainer.innerHTML = ""; 
      for (var i = 0; i < arr.length; i++) {
          newContainer.innerHTML += `
              <div  class="col-span-12 md:col-span-6 lg:col-span-3 rounded-2xl relative hover:scale-105 hover:transition hover:duration-500 cursor-pointer shadow-lg">
                  <div class="image " onclick="getProductDetails('${arr[i].id}')">
                      <img src="${arr[i].images[0]}" alt="" class="rounded-xl w-full h-72 object-contain">
                  </div>
                  <div class="card-info px-5 py-2 mt-5 ">
                      <h3 class="text-2xl font-bold line-clamp-1">${arr[i].title}</h3>
                      <p class="mt-4 line-clamp-3">${arr[i].description}</p>
                      <p class="mt-3 font-semibold text-lg">Price: <span class="font-bold text-rose-700">$${arr[i].price}</span></p>
                     
                      <button onclick="getCardDetails('${arr[i].id}')" class="btn bg-rose-900 text-white my-2 w-full hover:bg-rose-800">Add to Cart</button>
                  </div>
                  <div class="fav absolute bg-gray-400 bg-opacity-60 p-3 rounded-full w-12 h-12 flex items-center justify-center right-5 top-4 shadow-xl cursor-pointer">
                      <i class="fa-solid fa-heart text-2xl favBtn"></i>
                  </div>
              </div>
          `;
      }
  
      // add to favorite icon changes
      document.querySelectorAll(".favBtn").forEach((btn) => {
          btn.addEventListener("click", function() {
              this.classList.toggle("text-red-500"); 
          });
      });

        // increase and decrease counter
    newContainer.addEventListener("click", function(event) {
      // Check if a plus button was clicked
      if (event.target.classList.contains("plusBtn")) {
          const counterElement = event.target.previousElementSibling;
          let count = parseInt(counterElement.textContent);
          counterElement.textContent = count + 1;
      }
      
      // Check if a minus button was clicked
      if (event.target.classList.contains("minusBtn")) {
          const counterElement = event.target.nextElementSibling;
          let count = parseInt(counterElement.textContent);
          if (count > 0) { // Prevent negative count
              counterElement.textContent = count - 1;
          }
      }
  });

  }
  
  
function displayContactPage(){
  productsContainer.innerHTML=""
  newContainer.innerHTML=""
  contactusContainer.innerHTML=`
     <div class="title mt-5">
      <h2 class="text-center capitalize text-5xl font-bold ">Get in touch</h2> 
      <p class="text-gray-500 text-center relative capitalize text-lg mt-3 before:absolute before:w-14 before:h-1 before:top-10 before:start-1/2 before:translate-x-[-50%] before:bg-rose-900">
        “ready to help your company scale faster? let's chat about how we can help. ”</p>
    </div>
    <div class="grid grid-cols-12 md:gap-10 gap-y-5 mt-14">
     <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <div class="border-2 px-5 py-5 rounded-xl shadow-xl">
        <div class="w-10 h-10 px-5 rounded-full rounded-es-none flex items-center justify-center bg-rose-200 bg-opacity-30">
          <i class="fa-regular fa-face-smile text-2xl text-rose-800"></i>
        </div>
        <h5 class="text-lg mt-5 font-bold">Chat to sales</h5>
        <p class="text-gray-600">"Speak to our friendly team.</p>
        <button class="siteBtn w-3/4 mt-3">Chat to sales</button>
      </div>
     </div>
     <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <div class="border-2 px-5 py-5 rounded-xl shadow-xl ">
        <div class="w-10 h-10 px-5 rounded-full rounded-es-none flex items-center justify-center bg-rose-200 bg-opacity-30">
          <i class="fa-solid fa-headset text-2xl text-rose-800"></i>
        </div>
        <h5 class="text-lg mt-5 font-bold">Chat to support</h5>
        <p class="text-gray-600">"Where're here to help.</p>
        <button class="siteBtn w-3/4 mt-3">Chat to support</button>
      </div>
     </div>
     <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <div class="border-2 px-5 py-5 rounded-xl shadow-xl">
        <div class="w-10 h-10 px-5 rounded-full rounded-es-none flex items-center justify-center bg-rose-200 bg-opacity-30">
          <i class="fa-solid fa-arrow-up-right-from-square text-2xl text-rose-800"></i>
        </div>
        <h5 class="text-lg mt-5 font-bold">Visit Us</h5>
        <p class="text-gray-600">"Visit our office HQ.</p>
        <button class="siteBtn w-3/4 mt-3">Get directions</button>
      </div>
     </div>
     <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <div class="border-2 px-5 py-5 rounded-xl shadow-xl">
        <div class="w-10 h-10 px-5 rounded-full rounded-es-none flex items-center justify-center bg-rose-200 bg-opacity-30">
          <i class="fa-solid fa-phone-volume text-2xl text-rose-800"></i>
        </div>
        <h5 class="text-lg mt-5 font-bold">Call us</h5>
        <p class="text-gray-600">"Mon-Fri from 8am to 9pm.</p>
        <button class="siteBtn w-3/4 mt-3">Call our team</button>
      </div>
     </div>
    </div>
    <div class="mt-14 flex items-center justify-center flex-col">
      <h2 class="text-center capitalize text-5xl font-bold ">Message Us</h2>
      <p class="text-gray-500 text-center relative capitalize text-lg mt-3 before:absolute before:w-14 before:h-1 before:top-10 before:start-1/2 before:translate-x-[-50%] before:bg-rose-900">
        “we will get back to you within 24 hours. ”</p>
        <form class="mt-10 flex items-center justify-center flex-col md:w-[600px]">
          <div class="flex gap-3 w-full mt-2">
            <div class="flex items-start justify-center flex-col w-full">
            <label for="name" class="text-lg font-medium">First Name</label>
            <input type="text" name="fname" id="name" placeholder="First name" class="border-2 px-3 py-2 rounded-lg w-full mt-2 focus:border-rose-700  outline-none">  
            </div>
            <div class="flex items-start justify-center flex-col w-full">
            <label for="last" class="text-lg font-medium">Last Name</label>
            <input type="text" name="lname" id="last" placeholder="Last name" class="border-2 px-3 py-2 rounded-lg w-full mt-2 focus:border-rose-700  outline-none">  
            </div>
          </div>
          <div class="flex items-start justify-center flex-col w-full mt-3">
            <label for="email" class="text-lg font-medium">Email</label>
            <input type="email" name="email" id="email" placeholder="you@gmail.com" class="border-2 px-3 py-2 rounded-lg w-full mt-2 focus:border-rose-700  outline-none">  
            </div>
          <div class="flex items-start justify-center flex-col w-full mt-3">
            <label for="phone" class="text-lg font-medium">Phone Number</label>
            <input type="phone" name="phone" id="phone" placeholder="01*********" class="border-2 px-3 py-2 rounded-lg w-full mt-2 focus:border-rose-700  outline-none">  
            </div>
          <div class="flex items-start justify-center flex-col w-full mt-3">
            <label for="message" class="text-lg font-medium">Message</label>
            <textarea id="last" placeholder="message" class="border-2 px-3 py-2 rounded-lg w-full resize-y h-[150px] mt-2 focus:border-rose-700  outline-none">Message</textarea> 
            </div>
            <button class="siteBtn mt-4">Send message</button>
        </form>
    </div>
  `
}

function displayCart(product) {
  $(".empty").addClass("hidden");

  // Add product to cartData
  cartData.push({
      title: product.title,
      price: product.price,
      images: product.images,
      discountPercentage: product.discountPercentage,
      quantity: 1 

  });

  // Display product in the cart
  cartsideContainer.innerHTML += `
  <div class="product-item flex items-center mt-10 gap-5" data-title="${product.title}">
    <img src="${product.images}" alt="" class="rounded-xl" style="width: 150px; height:150px;">
    <div class="text-white w-full relative">
      <h4 class="text-xl">${product.title}</h4>
      <p class="mt-3 font-semibold text-lg pb-3">Price: <span class="font-bold text-rose-700">$${product.price}</span></p>
      <span class="bg-yellow-400 py-1 mt-2 font-medium px-2">${product.discountPercentage}% OFF</span>
      <div class="flex justify-between mt-3 items-center w-1/2 rounded-lg h-14">
        <i class="fa-solid fa-minus p-2 rounded-lg border-2 border-rose-900 cursor-pointer minusBtn bg-white text-rose-900 shadow-lg hover:bg-rose-100 hover:transition hover:duration-500"></i>
        <h3 class="counter text-xl">1</h3>
        <i class="fa-solid fa-plus p-2 rounded-lg border-2 border-rose-900 cursor-pointer plusBtn bg-white text-rose-900 shadow-lg hover:bg-rose-100 hover:transition hover:duration-500"></i>
      </div>
      <i class="fa-regular fa-trash-can absolute text-xl cursor-pointer trashBtn" style="right: 50px; bottom: 15px;"></i>
    </div>
  </div>
  `;

  // Add event listeners for buttons
  cartsideContainer.addEventListener("click", function (event) {
      const productItem = event.target.closest(".product-item");
      const productTitle = productItem.getAttribute("data-title");

      // Increase quantity
      if (event.target.classList.contains("plusBtn")) {
          const counterElement = event.target.previousElementSibling;
          let count = parseInt(counterElement.textContent);
          counterElement.textContent = count + 1;

          // Update the quantity in cartData
          const productInCart = cartData.find(item => item.title === productTitle);
          if (productInCart) {
              productInCart.quantity = count + 1;
          }
      }

      // Decrease quantity
      if (event.target.classList.contains("minusBtn")) {
          const counterElement = event.target.nextElementSibling;
          let count = parseInt(counterElement.textContent);
          if (count > 0) {
              counterElement.textContent = count - 1;

              // Update the quantity in cartData
              const productInCart = cartData.find(item => item.title === productTitle);
              if (productInCart) {
                  productInCart.quantity = count - 1;
              }
          }
      }

      // Remove product
      if (event.target.classList.contains("trashBtn")) {
          cartData = cartData.filter(item => item.title !== productTitle); // Remove from cartData
          productItem.remove();
          if (cartData.length === 0) {
              $(".empty").removeClass("hidden");
          }
      }
  });
}


function displayProductDetails(product){
  header.classList.add("hidden")
  productTitle.classList.add("hidden")
  productsContainer.innerHTML=""
  productsContainer.innerHTML+=`
      <div class="col-span-7">
        <div>
          <img src="${product.images}" class="w-3/4" alt="">
        </div>
      </div>
      <div class="col-span-5 mt-10">
        <div class="">
          <p class="text-3xl font-bold mb-2">$${product.price}</p>
          <span class=" bg-yellow-400 py-1 font-medium px-2">${product.discountPercentage}% OFF</span>
          <h3 class="text-4xl font-semibold mt-2">${product.title}</h3>
          <p class="text-xl font-bold mt-2">Brand: <span class="text-rose-900 font-semibold text-lg">${product.brand}</span></p>
          <p class="text-xl font-bold mt-2">Category: <span class="text-rose-900 font-semibold text-lg">${product.category}</span></p>
          <p class="text-lg font-normal mt-2">${product.description}
          </p>
          <p class="mt-2 text-xl bg-pink-300 bg-opacity-40 inline-block px-2 py-1"><i class="fa-solid fa-warehouse"></i> ${product.stock} in stock</p>
          <div class="flex items-center justify-center gap-5 mt-2">
            <div class="flex justify-between p-1 items-center w-1/2 border-2 rounded-lg h-14">
              <i class="fa-solid fa-minus p-2 rounded-lg border-2 border-rose-900 cursor-pointer minusBtn bg-white text-rose-900 shadow-lg hover:bg-rose-100 hover:transition hover:duration-500"  ></i>
              <h3 class="counter text-xl">1</h3>
              <i class="fa-solid fa-plus p-2 rounded-lg border-2 border-rose-900 cursor-pointer plusBtn bg-white text-rose-900 shadow-lg hover:bg-rose-100 hover:transition hover:duration-500" ></i>
          </div>
          <div class="w-1/2">
             <button class="btn bg-rose-900 rounded-lg text-white my-2 h-14 w-full hover:bg-rose-800" onclick="getCardDetails('${product.id}')">Add to Cart</button> 
          </div>
          </div>
          <button class="btn bg-white border-2 border-rose-900 rounded-lg text-rose-900 my-2 h-14 w-full hover:bg-rose-800 hover:text-white">Buy Now</button> 
          <div class="flex items-center justify-between mt-2 bg-pink-300 bg-opacity-40 p-2 rounded-md">
            <p>${product.returnPolicy}</p>
            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews pb-10 col-span-12 mt-5">
      <h2 class="text-5xl text-center font-bold ">What our customers say</h2>
      <div class="grid grid-cols-12 mt-8 gap-10">
        <div class="col-span-4">
          <div class="border-2 rounded-md flex items-center justify-center flex-col py-4 pb-10 relative shadow-lg shadow-pink-200">
            <h4 class="text-3xl font-medium">${product.reviews[0].reviewerName}</h4>
            <p class="mt-2 text-lg"><i class="fa-solid fa-star text-yellow-500"></i> ${product.reviews[0].rating}/5 Star rating</p>
            <p class="text-xl mt-2">"${product.reviews[0].comment}"</p>
            <span class="text-gray-500 absolute bottom-2 right-3">${product.reviews[0].date.slice(0,10)}</span>
          </div>
        </div>
        <div class="col-span-4">
          <div class="border-2 rounded-md flex items-center justify-center flex-col py-4 pb-10 relative shadow-lg shadow-pink-200">
            <h4 class="text-3xl font-medium">${product.reviews[2].reviewerName}</h4>
            <p class="mt-2 text-lg"><i class="fa-solid fa-star text-yellow-500"></i> ${product.reviews[2].rating}/5 Star rating</p>
            <p class="text-xl mt-2">"${product.reviews[2].comment}"</p>
            <span class="text-gray-500 absolute bottom-2 right-3">${product.reviews[2].date.slice(0,10)}</span>
          </div>
        </div>
        <div class="col-span-4">
          <div class="border-2 rounded-md flex items-center justify-center flex-col py-4 pb-10 relative shadow-lg shadow-pink-200">
            <h4 class="text-3xl font-medium">${product.reviews[1].reviewerName}</h4>
            <p class="mt-2 text-lg"><i class="fa-solid fa-star text-yellow-500"></i> ${product.reviews[1].rating}/5 Star rating</p>
            <p class="text-xl mt-2">"${product.reviews[1].comment}"</p>
            <span class="text-gray-500 absolute bottom-2 right-3">${product.reviews[1].date.slice(0,10)}</span>
          </div>
        </div>
      </div>
  `
  productsContainer.addEventListener("click", function(event) {
    // Check if a plus button was clicked
    if (event.target.classList.contains("plusBtn")) {
        const counterElement = event.target.previousElementSibling;
        let count = parseInt(counterElement.textContent);
        counterElement.textContent = count + 1;
    }
    
    // Check if a minus button was clicked
    if (event.target.classList.contains("minusBtn")) {
        const counterElement = event.target.nextElementSibling;
        let count = parseInt(counterElement.textContent);
        if (count > 0) { // Prevent negative count
            counterElement.textContent = count - 1;
        }
    }
});
}


function displayCheckout() {
  productTitle.firstElementChild.innerHTML = `Checkout `;
  productTitle.classList.remove("hidden");
  header.classList.add("hidden");
  $(header.children[1].children[2]).addClass("hidden");
  categoriesTitle.classList.add("hidden");
  contactusContainer.innerHTML = "";
  categoriesContainer.innerHTML = "";
  productsContainer.innerHTML = "";
  document.querySelector(".homePage").classList.add("hidden");

  // Calculate total price and subtotal
  let subtotal = 0;
  cartData.forEach(product => {
    subtotal += product.price * product.quantity;
  });
  const discount = (subtotal * 0.05).toFixed(2); // Assuming a 5% discount
  const total = (subtotal - discount).toFixed(2);

  let checkoutHTML = `
  <div class="col-span-12 flex items-center justify-between gap-10">
      <div class="w-1/2 ">
      <h3 class="text-2xl font-semibold">Product Information & Review</h3>
      <p class="text-gray-500">By placing your order, you agree to Tulos in's Privacy and Policy.</p>
  `;

  cartData.forEach(product => {
    checkoutHTML += `
      <div class="flex items-center border-2 border-rose-900 mt-5 w-3/4 rounded-xl shadow-xl mb-10">
        <img src="${product.images}" style="width: 200px;" alt="">
        <div class="flex flex-col items-center justify-center w-full">
          <h4 class="text-2xl font-semibold text-center">${product.title}</h4>
          <p class="mt-3 font-semibold text-lg pb-3" style="padding-bottom: 10px;">Price: <span class="font-bold text-rose-700">$${product.price}</span></p>
          <span class="bg-yellow-400 py-1 font-medium px-2">${product.discountPercentage}% OFF</span>
          <p class="mt-2 text-lg font-semibold">Quantity: <span class="font-bold text-rose-700">${product.quantity}</span></p>
        </div>
      </div>
    `;
  });

  checkoutHTML += `
     <h3 class="text-2xl font-semibold">Delivery Shipping</h3>
        <div class="mt-5 w-3/4">
          <div class="flex items-center ps-4 border border-gray-200 rounded-xl dark:border-gray-700">
            <input id="bordered-checkbox-1" type="checkbox" value="check" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-rose-900 dark:focus:ring-rose-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">$3.99 Fast delivery
              <p class="text-gray-500">Get it by Tomorrow</p>
            </label>
        </div>
          <div class="flex items-center ps-4 border border-gray-200 rounded-xl dark:border-gray-700 mt-3">
            <input id="bordered-checkbox-2" type="checkbox" value="check" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-rose-900 dark:focus:ring-rose-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-checkbox-2" class="w-full py-4 ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Free delivery
              <p class="text-gray-500">Get it by Friday</p>
            </label>
        </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col justify-start">
        <h3 class="text-2xl font-semibold">Payment Details</h3>
        <p class="text-gray-500">Complete your purchase</p>
        <div>
          <div class="flex flex-col mt-5">
            <label for="emailin">Email Address</label>      
            <input type="email" placeholder="Enter your mail" id="emailin" class="border-2 px-3 py-2 rounded-lg w-1/2 mt-2 focus:border-rose-700  outline-none">
          </div>
          <div class="flex flex-col mt-5">
            <label for="credit">Credit card details</label>
            <input type="Name" class="border-2 px-3 py-2 rounded-lg w-1/2 mt-2 focus:border-rose-700  outline-none" placeholder="Name">
            <input type="number" placeholder="Card Number" class="border-2 px-3 py-2 rounded-lg w-1/2 mt-2 focus:border-rose-700  outline-none">
            <div class="flex w-3/4 gap-3">
              <input type="date" placeholder="Expiry Date" class="border-2 px-3 py-2 rounded-lg w-1/2 mt-2 focus:border-rose-700  outline-none" >
            <input type="number" placeholder="CVV" class="border-2 px-3 py-2 rounded-lg w-1/2 mt-2 focus:border-rose-700  outline-none">
            </div>
            <p class="text-gray-500">Payments are secure and encrypted</p>
            <div class="mt-5 w-1/2">
              <div class="flex items-center justify-between">
               <p class="text-lg text-gray-600">Subtotal</p> 
               <span class="font-semibold">$${subtotal.toFixed(2)}</span>
              </div>
              <div class="flex items-center justify-between">
               <p class="text-lg text-gray-600">Discount</p> 
               <span class="font-semibold">${discount}</span>
              </div>
              <div class="flex items-center justify-between">
               <p class="text-lg font-medium">Total</p>
               <span class="font-semibold">$${total}</span>
              </div>
            </div>
            <button class="siteBtn w-3/4 mt-5">Order & Pay</button>
          </div>
      </div>
     </div>
    </div>
  `;

  productsContainer.innerHTML = checkoutHTML;
}


 $("#getProducts").on("click",function(){
    productsPage()
 })
 $("#home").on("click",function(){
      homePage()
 })
 $("#aboutus").on("click",function(){
      homePage()
 })
 $("#contact").on("click",function(){
    contactPage()
 })
 $("#categories").on("click",function(){
    categoriesPage()
 })

  
 const swip = $("#swip").offset().top;
 let isAnimated = false; 
 
 $(window).on("scroll", function () {
     if ($(window).scrollTop() > swip) {
         if (!isAnimated) {
             $("#over").stop().animate({ left: "700px" }, 2700);
             isAnimated = true; 
         }
     } 
     else {
         if (isAnimated) {
             $("#over").stop().animate({ left: "0px" }, 500);
             isAnimated = false; 
         }
     }
 });

 $(".navbar-start li a").on("click", function(){
  $(".navbar-start li a").removeClass("active")
  $(this).addClass("active")
 })

 $(".openSide").on("click",function(){
  $("#sidebar").animate({right:"0px"},1000)
 })
 $(".closeSide").on("click",function(){
  $("#sidebar").animate({right:"-400px"},1000)
 })