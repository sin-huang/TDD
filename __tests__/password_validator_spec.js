import { isValidPassword } from "../password_validator.js";

describe("密碼驗證器測試", () => {
    test("密碼長度小於等於8",()=>{
        expect(isValidPassword('124sfr')).toBe(false);
        expect(isValidPassword('1a2b3c4d')).toBe(false);
    })

    test("必須包含英文字母及數字",()=>{
        // 只有數字肯定錯
        expect(isValidPassword('123456789')).toBe(false);
        // 只有英文肯定錯
        expect(isValidPassword('abcdefghi')).toBe(false);
    })

    test("不可以有空白",()=>{
        expect(isValidPassword('ab7 s89i3')).toBe(false);
    })

    test("合法密碼",()=>{
        expect(isValidPassword('ab7s89i3b')).toBe(true);
    })
});
