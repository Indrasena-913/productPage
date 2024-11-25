document.addEventListener("DOMContentLoaded", async () => {
	async function GetProductDetails() {
		const list = await fetch("https://dummyjson.com/products");
		return list.json();
	}

	const LoadProductDetails = async () => {
		const printlist = await GetProductDetails();
		console.log(printlist);
		createProductPage(printlist);
	};
	LoadProductDetails();

	function createProductPage({ products }) {
		console.log(products);
		const Button = document.querySelectorAll("button");

		Button.forEach((item) => {
			item.classList.add("cart-button");
		});

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

	const productDetails = document.querySelectorAll(".product-details");

	productDetails.forEach((item) => {
		item.addEventListener("click", () => {
			console.log("clicked");
			const pID = item.querySelector(".id").getAttribute("product-id");
			console.log(pID);
			localStorage.setItem("ppid", pID);

			window.open("./single.html");
		});
	});

	// function AddtoCart()

	const Button = document.querySelectorAll("button");

	Button.forEach((item) => {
		item.textContent = "";
		item.classList.remove("bg-green-500");
	});
});
