fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = document.querySelector(".products");
    products.innerHTML = ""; // Xóa nội dung "Loading..."

    data.forEach((element) => {
      const newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
        <img src="${element.image}" alt="Product Image" />
        <div class="info">
          <div class="name">${element.title}</div>
          <div class="price">$${element.price}</div>
        </div>`;
      products.appendChild(newProduct);
    });
  });

var searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  let listProductDOM = document.querySelectorAll(".product");

  listProductDOM.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
