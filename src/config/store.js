/**
 * Created by hasee on 2017/4/27.
 */
import {createStore,combineReducers,applyMiddleware } from  "redux";
import * as reducers from  "../reducer/index"

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
/*加载所有的reducer 改名为reducers*/
const loggerMiddleware = createLogger()

const toDoApp =combineReducers(reducers)  //合并reducer


//一个应用里面有且只能有一个store
const store = createStore(
    toDoApp,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    ));


console.log(store.getState())

export  default  store