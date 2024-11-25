document.addEventListener("DOMContentLoaded", () => {
	async function GetProductDetails() {
		const ppid = localStorage.getItem("ppid");
		const list = await fetch(`https://dummyjson.com/products/${ppid}`);
		return list.json();
	}

	const LoadProductDetails = async () => {
		const printlist = await GetProductDetails();
		console.log(printlist);
		createProductPage(printlist);
	};
	LoadProductDetails();

	function createProductPage(data) {
		console.log(data);
		const Indra = "Own Brand";
		const productImages = document.querySelector(".image1");
		const ProductTitle = document.querySelector(".image-title");
		const Categories = document.querySelectorAll(".category");
		const prices = document.querySelector(".mt-1");
		const BrandName = document.querySelector(".brand");
		const descriptiontext = document.querySelector(".descrip");
		// console.log(ProductTitle);
		const { images, title, brand, description, price } = data;
		productImages.src = images[0];
		ProductTitle.innerText = title;
		BrandName.innerText = brand ?? Indra;
		descriptiontext.innerText = description;
		prices.innerText = price;
	}

	function storeValue(key, value) {
		console.log("storing the value");
		let existingValues = [];

		existingValues = JSON.parse(localStorage.getItem(key)) || [];

		existingValues.push(value);

		localStorage.setItem(key, JSON.stringify(existingValues));
	}

	const cartButton = document.querySelector(".cart-button");
	cartButton.addEventListener("click", () => {
		alert("Added To Cart");
		const ppid = localStorage.getItem("ppid");

		storeValue("cart-num", ppid);
	});
});
