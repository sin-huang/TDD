import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../App.vue";
import SimpleCounter from "../ui/SimpleCounter.vue";

describe("App",()=>{
    test("畫面上有一組簡單的加減器", async ()=>{
        const wrapper = mount(App);
        // find the second button
        const button = wrapper.findAll("button")[1];
        // find the result of the counter
        const result = wrapper.find("span");

        // fetch which btn is plus
        expect(button.text()).toContain('+');

        // 點一下加法器後 result會加1
        await button.trigger("click");
        expect(result.text()).toContain('1');
    })
})