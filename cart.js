class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }
}
class Cart {
  constructor(...products) {
    this.items = products;
  }

  addProduct(product) {
    this.items.push(product);
  }

  hasProduct(product) {
    return this.items.includes(product);
  }

  removeProduct(product) {
    // this.items = this.items.filter((item)=>{
    //     return item != product;
    // })
    // 在陣列中移除某個東西 應該用 找到他的位址 有存在的話 就把它移除
    const idx = this.items.findIndex((item) => {
      return item == product;
    });
    if (idx != -1) {
      this.items.splice(idx, 1);
    }
  }

  totalPrice() {
    const total = this.items.reduce((accm, item) => {
      return (accm += item.price);
    }, 0);
    if (total >= 1000) {
      return total * 0.9;
    }
    return total;
  }

  clearCart(){
    this.items = [];
  }
}

export { Cart, Product };
