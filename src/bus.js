// on和emit的事件必须是在一个公共的实例上，才能触发。
// 解决方案：新建bus.js用来进行 事件的触发$emit 和 监听 $on
import Vue from 'vue'
export default new Vue();