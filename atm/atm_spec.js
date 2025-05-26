// import { ATM } from "../atm.js"

// describe("領錢功能", () => {
//   test("可以領錢", () => {
//     const account = new ATM(10);
//     const res = account.withdraw(7);

//     expect(account.balance()).toBe(3);
//     expect(res).toBe(7); // 你拿到的錢
//   });

//   test("不可以領0元或小於0元的金額", () => {
//     const account = new ATM(10);
//     const res = account.withdraw(-3);

//     expect(account.balance()).toBe(10);
//     expect(res).toBe(0);
//   });

//   test("不能領超過本身的餘額", () => {
//     const account = new ATM(10);
//     const res = account.withdraw(12);

//     expect(account.balance()).toBe(10);
//     expect(res).toBe(0);
//   });
// });
