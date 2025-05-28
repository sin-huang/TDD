import {describe, expect, it} from "vitest";
import { mount } from "@vue/test-utils";
import InputcountField from "../ui/InputCountField.vue";

describe("動態字數顯示", () => {
  it("沒有輸入的時候，顯示「你輸入 0 個字」", () => {
    const wrapper = mount(InputcountField);

    expect(wrapper.text()).toContain("你輸入 0 個字");
  });

  it("使用者可輸入文字", async () => {
    const wrapper = mount(InputcountField);
    const input = wrapper.find('input')

    await input.setValue('abcdefg')
    expect(wrapper.text()).toContain("你輸入 7 個字");
  });
});
