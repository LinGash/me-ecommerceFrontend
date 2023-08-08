const data = [
	{
		itemName: "Red Shirt",
		itemNameDetail: "Red Printed Shirt by Hein Min Htet",
		money: 10000,
		image: [
			"product-1.webp",
			"Product-1-side-1.webp",
			"Product-1-side-2.webp",
			"Product-1-side-3.webp",
		],
		stock: 1,
		size: ["small", "medium", "large"],
		release: "1 february 2021",
		type: "T-shirt",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Black Shoe",
		itemNameDetail: "Black Shoe",
		money: 15000,
		image: ["product-2.webp"],
		stock: 5,
		size: ["small", "medium", "large"],
		release: "2 february 2021",
		type: "shoe",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Jean Trouser",
		itemNameDetail: "Jean Trouser",
		money: 25000,
		image: ["product-3.webp"],
		stock: 2,
		size: ["small", "medium", "large"],
		release: "3 May 2021",
		type: "Trouser",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Blue Shirt",
		itemNameDetail: "Blue Shirt",
		money: 8000,
		image: ["product-4.webp"],
		stock: 4,
		size: ["small", "medium", "large"],
		release: "1 August 2021",
		type: "T-shirt",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "White Shoe",
		itemNameDetail: "White Shoe",
		money: 12000,
		image: ["product-5.webp"],
		stock: 1,
		size: ["small", "medium", "large"],
		release: "22 june 2021",
		type: "Shoe",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Black Shirt",
		itemNameDetail: "Black Shirt",
		money: 16000,
		image: ["product-6.webp"],
		stock: 3,
		size: ["small", "medium", "large"],
		release: "12 April 2021",
		type: "T-shirt",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},

	{
		itemName: "Colorful Socks",
		itemNameDetail: "Colorful Socks",
		money: 6000,
		image: ["product-7.webp"],
		stock: 8,
		size: ["small", "medium", "large"],
		release: "27 July 2021",
		type: "Sock",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},

	{
		itemName: "Black Watch",
		itemNameDetail: "Black Watch",
		money: 12000,
		image: ["product-8.webp"],
		stock: 7,
		size: ["small", "medium", "large"],
		release: "19 September 2021",
		type: "watch",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},

	{
		itemName: "Brown Watch",
		itemNameDetail: "Brown Watch",
		money: 12000,
		image: ["product-9.webp"],
		stock: 4,
		size: ["small", "medium", "large"],
		release: "1 November 2021",
		type: "watch",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Black-Red Shoe",
		itemNameDetail: "Black-Red Shoe",
		money: 13000,
		image: ["product-10.webp"],
		stock: 2,
		size: ["small", "medium", "large"],
		release: "2 January 2021",
		type: "shoe",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Grey Shoe",
		itemNameDetail: "Grey Shoe",
		money: 18000,
		image: ["product-11.webp"],
		stock: 4,
		size: ["small", "medium", "large"],
		release: "13 MAy 2021",
		type: "shoe",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Black Jean",
		itemNameDetail: "Back Jean",
		money: 12000,
		image: ["product-12.webp"],
		stock: 3,
		size: ["small", "medium", "large"],
		release: "3 September 2021",
		type: "jean",
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Orange Shoe",
		itemNameDetail: "Orange Shoe",
		money: 17000,
		image: ["category-1.webp"],
		stock: 3,
		size: ["small", "medium", "large"],
		release: "9 May 2021",
		type: "shoe",
		fav: true,
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Modern Shoe",
		itemNameDetail: "Modern Shoe",
		money: 19000,
		image: ["category-2.webp"],
		stock: 3,
		size: ["small", "medium", "large"],
		release: "18 January 2021",
		type: "shoe",
		fav: true,
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "White watch",
		itemNameDetail: "White watch",
		money: 250000,
		image: ["category-3.webp"],
		stock: 3,
		size: ["small", "medium", "large"],
		release: "5 March 2021",
		type: "watch",
		fav: true,
		productDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maiores numquam cupiditate blanditiis sit accusantium quisquam voluptas. Suscipit accusantium voluptate totam quod quasi, repellendus omnis debitis saepe, vero fugiat deserunt?",
	},
	{
		itemName: "Smart Band 4",
		itemNameDetail: "Smart Band 4",
		money: 50000,
		image: ["exclusive.png"],
		stock: 3,
		size: ["small", "medium", "large"],
		release: "9 March 2021",
		type: "watch",
		exclusive: true,
		productDetail:
			"Smart Watch, 1.69'' Touch Screen Fitness Tracker Watches for Women, IP68 Waterproof Smartwatch with Heart Rate Monitor, Sleep Monitor, Pedometer, Stopwatch Activity Tracker for Android/iOS",
	},
];
export default data;
