import Vue from 'vue'
import {ADDFN,ADDFN2} from '/module/car'

export const Car_Store={
    state: {
        total:10,
        total1:5,
        total2:2
    },
    getters:{
        isGt20:(state)=>{
            return state.total>20
        },
        // isGtnum:function(state){
        //   return function(num){
        //     return state.total>num;
        //   }
        // },
        isGtnum:state=>num=>state.total>num
    },
    mutations: {
        [ADDFN](state,obj){
            state.total+=obj+n;
        }
    },
    actions: {
        newAdd:function(context){
            setTimeout(function(){
                context.commit(ADDFN,{n:3})
            },3000)
        }
    }
}