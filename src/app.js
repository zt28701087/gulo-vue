import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-grop'
import Input from './input'
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
new Vue({
    el: "#app",
    data:{
        loading1: false,
        loading2: true,
        loading3: false
    }
});
//
// import chai from 'chai'
// const expect = chai.expect;
// //单元测试
// {
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData:{
//             icon: 'settings'
//         }
//     });
//     //console.log(constructor)
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings');
//     vm.$el.remove();
//     vm.$destroy()
// }
//
// {
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData:{
//             icon: 'settings',
//             loading: true
//         }
//     });
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-loading');
//     vm.$el.remove();
//     vm.$destroy();
// }
//
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData:{
//             icon: 'settings'
//         }
//     });
//     vm.$mount(div);
//     let svg = vm.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq('1');
//     vm.$el.remove();
//     vm.$destroy()
// }
//
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div)
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData:{
//             icon: 'settings',
//             iconPosition: 'right'
//         }
//     });
//     vm.$mount(div);
//     let svg = vm.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq('2');
//     vm.$el.remove();
//     vm.$destroy()
// }
// import spies from 'chai-spies'
// chai.use(spies);
// {
//     const constructor = Vue.extend(Button);
//     const gButton = new constructor({
//         propsData:{
//             icon: 'settings'
//         }
//     }).$mount();
//     let spy = chai.spy(function () {});
//     gButton.$on('click', spy);
//     let button = gButton.$el;
//     button.click();
//     expect(spy).to.have.been.called();
// }
// catch(error){
//     window.errors = [error]
// } finally{
//     window.errors.forEach((error) => {
//         console.error(error.message)
//     })
// }