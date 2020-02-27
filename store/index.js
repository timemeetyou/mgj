import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addTo(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      // let oldProduct = null
      // for(let item of context.state.cartList){
      //   if(item.iid===payload.iid){
      //     oldProduct=item
      //   }
      // }

      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('商品数量添加成功')
          reject("err")
        } else {
          payload.count = 1
          context.commit('addTo', payload)
          resolve('添加购物车成功')
          reject("err")

        }

      }).catch((e) => { })
    }
  },
  getters,
  modules: {
  }
})
