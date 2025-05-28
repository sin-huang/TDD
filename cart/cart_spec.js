import { Cart, Product } from "./cart.js";

describe("購物車計算機", () => {
  test("可以新增商品(名字,價格)", () => {
    const cart = new Cart();
    const p1 = new Product("皮卡丘", 10);
    const p2 = new Product("洋芋片", 30);
    const p3 = new Product("糖果", 60);

    cart.addProduct(p1);
    cart.addProduct(p2);

    expect(cart.items.length).toBe(2);
    // 判斷商品是否存在
    expect(cart.hasProduct(p2)).toBe(true);
    // 我沒有加p3到購物車 那當然不會在購物車中阿
    expect(cart.hasProduct(p3)).toBe(false);
  });

  test("可以刪除商品", () => {
    const p1 = new Product("皮卡丘", 10);
    const p2 = new Product("洋芋片", 30);
    const cart = new Cart(p1, p2);


    cart.removeProduct(p1);

    expect(cart.items.length).toBe(1);
    expect(cart.hasProduct(p1)).toBe(false);
    expect(cart.hasProduct(p2)).toBe(true);
  });

  test("可以計算總價",()=>{
    const p1 = new Product("皮卡丘", 10);
    const p2 = new Product("洋芋片", 30);
    const cart = new Cart(p1, p2, p2);

    expect(cart.totalPrice()).toBe(70);
  });

  
  test("有折扣機制 - 滿千打九折",()=>{
    const p1 = new Product("皮卡丘", 500);
    const p2 = new Product("洋芋片", 350);
    const cart = new Cart(p1, p2);
  
    expect(cart.totalPrice()).toBe(850);
    cart.addProduct(p2)
    expect(cart.totalPrice()).toBe(1080);
  })

  test("清空購物車",()=>{
    const p1 = new Product("皮卡丘", 500);
    const p2 = new Product("洋芋片", 350);
    const cart = new Cart(p1, p2);
  
    expect(cart.items.length).toBe(2);
    expect(cart.totalPrice).not.toBe(0);

    cart.clearCart();
    
    expect(cart.items.length).toBe(0);
    expect(cart.totalPrice()).toBe(0);
  })
});
