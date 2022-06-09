/*
 * @Author:PeiChen Xia
 * @Date:2022-06-09 10:38:05
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-09 17:01:47
 * @Description:
 */

import { defineStore } from 'pinia';

import {
  nanoid
} from 'nanoid'

export const todosData = defineStore({
  id:'todosData',
  state:() => ({
    todos:[
      {
          id:'01',
          title:'吃飯',
          done:false
      }
    ],
  }),
  actions:{
    addTodo(newTodo){
      const obj = { id:nanoid(),title:newTodo.value,done:false };
      this.todos.unshift(obj)
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
  },
    editTodo(id,title){
      this.todos.forEach((todo)=>{
          if(todo.id === id) todo.title = title
      })
  },
  checkTodo(id){
    this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
    })
  },
  
  checkAllTodo(done){
    this.todos.forEach((todo)=>{
      todo.done = done
    })
  },

  clearAllTodo(){
    this.todos = this.todos.filter((todo)=>{
      return !todo.done
    })
  }

  },
  getters:{},
})