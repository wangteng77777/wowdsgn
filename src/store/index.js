import Vue from "vue"
import vuex from "vuex"
import axios from "axios"

Vue.use(vuex)

var store = new vuex.Store({
	state:{
		imglist:[],
		imglist0:[],
		imglist1:[],
		imglist2:[],
		imglist3:[],

	},
	mutations:{
		changelist(state,res){
			state.imglist = res.data.data
			console.log(res.data.data)
		}
	},
	actions:{
		toget(state,path){
			axios.get(path).then((res)=>{
				state.commit("changelist",res)
			})
		}
	}

})
export default store
