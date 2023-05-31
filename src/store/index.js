import { defineStore } from "pinia";
import { getInfo, login } from "@/api/manager.js"
import { setToken, removeToken } from "@/utils/token.js"

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            user: {}, // 用户信息
            asideWidth: "250px",  // 侧边导航宽度
            menus: [],
            ruleNames: []
        }
    },
    getters: {
        setUserInfo(state, user) {
            state.user = user
        },
        // 展开/缩起侧边
        handleAsideWidth(state) {
            state.asideWidth = state.asideWidth == "250px" ? "64px" : "250px"
        },
        setMenus(state, menus) {
            state.menus = menus
        },
        setRuleNames(state, ruleNames) {
            state.ruleNames = ruleNames
        }
    },
    actions: {
      // eslint-disable-next-line no-unused-vars
      async userLogin({ commit }, { username, password }) {
        try {
            let result = await login(username, password)
            setToken(result.token) // 设置token
            return result
        } catch (error) {
            return Promise.reject(error)
        }
        },
        // 获取用户信息
        async getUserInfo({ commit }) {
        try {
            let result = await getInfo()
            commit("setUserInfo", result)
            commit("setMenus", result.menus)
            commit("setRuleNames", result.ruleNames)
            return result
        } catch (error) {
            return Promise.reject(error)
        }
        },
        // 退出登录
        async logout({ commit }) {
            removeToken()
            commit("setUserInfo", {})
        }
    }
       
  })