document.addEventListener("DOMContentLoaded", () => {
	async function GetProductDetails() {
		let storedValues = JSON.parse(localStorage.getItem("cart-num")) || [];

		const fetchPromises = storedValues.map(async (value, index) => {
			console.log(`Fetching product with ID ${value}`);

			const response = await fetch(`https://dummyjson.com/products/${value}`);
			if (!response.ok) {
				throw new Error(`Failed to fetch product with ID ${value}`);
			}
			return response.json();
		});

		return Promise.all(fetchPromises);
	}

	const LoadProductDetails = async () => {
		const printlist = await GetProductDetails();
		console.log(printlist);
		createProductPage(printlist);
	};
	LoadProductDetails();

	function createProductPage(products) {
		const productImages = document.querySelectorAll(".image1");
		const ProductTitle = document.querySelectorAll(".image-title");
		const Categories = document.querySelectorAll(".category");
		const prices = document.querySelectorAll(".mt-1");
		const ID = document.querySelectorAll(".id");

		products.forEach((product, index) => {
			// console.log(product, index);

			if (productImages[index]) {
				const { images } = product;
				productImages[index].src = images[0];
			}

			if (ProductTitle[index]) {
				const { title } = product;
				// console.log(title);

				ProductTitle[index].innerText = title;
			}
			if (Categories[index]) {
				const { category } = product;
				Categories[index].innerText = category;
			}
			if (prices[index]) {
				const { price } = product;
				prices[index].innerText = price;
			}
			if (ID[index]) {
				const { id } = product;
				console.log(id);

				ID[index].setAttribute("product-id", id);
				console.log(ID[index]);
			}
		});
	}
});
