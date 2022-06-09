<!--
 * @Author:PeiChen Xia
 * @Date:2022-06-09 11:34:30
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-09 17:01:12
 * @Description:
-->
<script setup>
import {ref} from 'vue'
import { todosData } from '@/store/data'
const todos = todosData ()
const newTodo = ref("");
function add(){
  if(!newTodo.value.trim()){return alert('請輸入數據')}
    todos.addTodo(newTodo)
    newTodo.value = ''
  }
</script>

<template>
  <div class="todoList-header">
    <div class="enter-group">
    <input type="text" v-model="newTodo" @keyup.enter="add">
      <button @click="add">+</button>
    </div>
  </div>
</template>