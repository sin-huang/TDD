// class ATM {
//     constructor(money) {
//       this.money = money;
//     }
  
//     deposit(money) {
//       if (money >= 0) {
//         this.money += money;
//       }
//     }
  
//     // 更好的版本
//     withdraw(money) {
//       if (money > 0 && money <= this.balance()) {
//         this.money -= money;
//         return money;
//       }
//       return 0;
//     }
  
//     balance() {
//       return this.money;
//     }
//   }
  
//   describe("存錢功能", () => {
//     test("可以存錢", () => {
//       const account = new ATM(5);
//       account.deposit(65);
//       expect(account.balance()).toBe(70);
//     });
  
//     test("不可以存0元或小於0元的金額", () => {
//       const account = new ATM(5);
//       account.deposit(-10);
//       expect(account.balance()).toBe(5);
//     });
//   });

//   export { ATM };