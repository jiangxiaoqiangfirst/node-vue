// import axios from "../plugins/axios";
import axios from 'axios'

import * as types from './types'


export default {
  
  ['VIEW_NAV']:({commit,state},payload)=>{commit('VIEW_NAV',payload)},
  [types['VIEW_FOOT']]:({commit,state},payload)=>commit('VIEW_FOOT',payload),
  [types.VIEW_LOADING]:({commit,state},payload)=>{console.log('actions');commit('VIEW_LOADING',payload)},

  [types.UPDATE_HOME]:({commit,state},payload)=>{
    axios({
      url:'/api/home',
      params:{_page:1,_limit:15}
    }).then(
      res=>commit('UPDATE_HOME',res.data.data)
    )
  },

  [types.UPDATE_FOLLOW]:({commit,state},payload)=>{
    axios({
      url:'/api/follow',
      params:{_page:1,_limit:16}
    }).then(
      res=>commit('UPDATE_FOLLOW',res.data.data)
    )
  },

  [types.UPDATE_COLUMN]:({commit,state},payload)=>{
    axios({
      url:'/api/column',
      params:{_page:1,_limit:6}
    }).then(
      res=>commit('UPDATE_COLUMN',res.data.data)
    )
  },

  [types.UPDATE_BANNER]:({commit,state},payload)=>{
    axios({
      url:'/api/banner',
      params:{_page:1,_limit:3}
    }).then(
      res=>commit('UPDATE_BANNER',res.data.data)
    )
  },
  [types.UPDATE_REG]:({commit,state},payload)=>{
    
    // console.log(axios,payload,'fuzai')
   axios({
      url:'/api/reg',
      method:'post',
      data:payload
    }).then(
      
      res=>{
        // console.log(res)
        commit('UPDATE_REG',res)}
    )
  },
  [types.UPDATE_DETAIL]:({commit,state},{type,payload})=>{
    // console.log('UPDATE_DETAIL',payload)
    axios({
      url:`/api/${payload.dataName}/${payload.id}`
    }).then(
      res=>commit('UPDATE_DETAIL',res.data.data)
    )
  },

  [types.UPDATE_USER]: async ({commit,state},payload)=>{
    console.log('actions UPDATE_USER')
    let res = await axios({url:'/api/user'})
    commit('UPDATE_USER',{a:1,b:2})
  },

  addItem:({commit,state},payload)=>{ // state是复制的一份，修改不影响真实state

    let arr=[...state.buycar];

    let find=false;

    arr.forEach((item,index)=>{
      if(item._id==payload._id){
        item.number++;//数量递增
        find=true;
      }
    });
    if(!find) {
      payload.number=1;//数量
      arr.push(payload);
    }
    // commit(types.ADD_ITEM,[...state.buycar])
    commit(types.ADD_ITEM,arr)
  },

  changeItem:({commit,state},payload)=>{
    // [...state.buycar]
    // {....state}
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        item.number+=payload.num;
      }
    });
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
    commit(types.CHANGE_ITEM,[...state.buycar])
    // commit(types.CHANGE_ITEM,state)  ×
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        state.buycar.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.buycar]);
    // commit(types.REMOVE_ITEM,state.buycar);
  },
  clearBuycar:({commit,state})=>{
    commit(types.CLEAR_BUYCAR,[]);
  }
}