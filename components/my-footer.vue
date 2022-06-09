<!--
 * @Author:PeiChen Xia
 * @Date:2022-06-09 11:34:49
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-09 17:01:40
 * @Description:
-->
<script setup>
import {computed } from 'vue'
import { todosData } from '@/store/data'
const todos = todosData ()
const total = computed(()=>{
  return todos.todos.length
})
const doneTotal = computed({
  get(){
      return todos.todos.reduce((pre,current) => pre + (current.done?1:0),0)
  },
})

const isAll = computed({
  get(){
    return todos.todos.reduce((pre,current) => pre + (current.done?1:0),0) === todos.todos.length && todos.todos.length > 0
  },
  set(value){
    todos.checkAllTodo(value)
  }
})

function clearAll(){
    todos.clearAllTodo()
  }
</script>

<template>
  <div class="todoList-footer">
    <div class="todoList-footer-text">
      <input type="checkbox" v-model="isAll" /> 
      <span>已完成 {{doneTotal}} / 全部 {{total}} </span>
    </div>
      <button @click="clearAll">清除已完成</button>
  </div>
</template>