import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Home from './home'

export function createStore(){
	return new Vuex.Store({
		modules : {
			Home
		},
		strict: process.env.NODE_ENV !== 'production'
	})
}