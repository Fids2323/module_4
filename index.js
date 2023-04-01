const Cart = function (goodsArray = []) {
	this.goods = goodsArray;
	this.totalPrice = 0;
	this.count = 0;
};

Cart.prototype.calculateGoodsPrice = function () {
	this.totalPrice = this.goods.reduce((acc, item) => acc + item.price, 0);
};

Cart.prototype.addGoods = function (good) {
	this.goods.push(good);
	this.increaseCount();
	this.calculateGoodsPrice();
};

Cart.prototype.getTotalPrice = function () {
	return this.totalPrice;
};

Cart.prototype.increaseCount = function () {
	this.count++;
};

Cart.prototype.clear = function () {
	this.goods = [];
	this.totalPrice = 0;
	this.count = 0;
};

Cart.prototype.print = function () {
	console.log(JSON.stringify(this.goods));
	console.log(this.totalPrice);
};

const Goods = function (price, name, discount) {
	this.price = price;
	this.name = name;
	this.discount = discount;
};

const FoodGoods = function (price, name, discount, calories) {
	Goods.call(this, price, name, discount);
	this.calories = calories;
};

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);
// FoodGoods.prototype = Object.create(Goods.prototype);
// FoodGoods.prototype.constructor = FoodGoods;

const ClothingGoods = function (price, name, discount, material) {
	Goods.call(this, price, name, discount);
	this.material = material;
};

Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);
// ClothingGoods.prototype = Object.create(Goods.prototype);
// ClothingGoods.prototype.constructor = ClothingGoods;

const TechnicsGoods = function (price, name, discount, techType) {
	Goods.call(this, price, name, discount);
	this.techType = techType;
};

Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);
// TechnicsGoods.prototype = Object.create(Goods.prototype);
// TechnicsGoods.prototype.constructor = TechnicsGoods;

const bread = new FoodGoods(35, "Bread", 3, 35);
const shirt = new ClothingGoods(1000, "Shirt", 3, "silk");
const nokia = new TechnicsGoods(12000, "Nokia", 3, "phone");

const cart = new Cart();

cart.addGoods(bread);
cart.addGoods(shirt);
cart.addGoods(nokia);

console.log(cart);
