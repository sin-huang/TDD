import { describe, it, expect } from "vitest";
import SimpleCounter from "../ui/SimpleCounter.vue";
import { mount } from "@vue/test-utils";

describe("簡單加減器", () => {
  it("中間預設數字是 0", () => {
    const wrapper = mount(SimpleCounter);

    // 利用id更精準地去抓特定的 tag 標籤
    const input = wrapper.find('span');

    expect(input.text()).toEqual('0');
  });

  it("按 + 按鈕數字加1 按 - 數字減1 ", async () => {
    const wrapper = mount(SimpleCounter);

    // 利用id更精準地去抓特定的 tag 標籤
    const input = wrapper.find('span');
    console.log(input)
    const plusBtn = wrapper.find('[data-testid="plusBtn"]');
    const minusBtn = wrapper.find('[data-testid="minusBtn"]');

    expect(input.text()).toEqual('0');
    // console.log(plusBtn);

    await plusBtn.trigger("click");
    await plusBtn.trigger("click");
    
    expect(input.text()).toEqual('2');

    await minusBtn.trigger("click");
    expect(input.text()).toEqual('1');
  });

  it(" 不能減成負的 ", async () => {
    const wrapper = mount(SimpleCounter);

    const input = wrapper.find('span');
    const minusBtn = wrapper.find('[data-testid="minusBtn"]');

    await minusBtn.trigger("click");
    await minusBtn.trigger("click");
    await minusBtn.trigger("click");
    await minusBtn.trigger("click");

    expect(input.text()).toEqual('0');
  });

});
