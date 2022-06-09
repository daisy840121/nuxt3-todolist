<!--
 * @Author:PeiChen Xia
 * @Date:2022-06-09 11:35:57
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-09 17:01:31
 * @Description:
-->
<script setup>
import { todosData } from '@/store/data'
const todos = todosData ()
function del(id){
  if(confirm('確定刪除嗎？')){
    todos.deleteTodo(id)
  }
}

function edit(t){
  t['isEdit']=true
}

function handelEdit(t,event){
  t['isEdit']=false
  if(!event.target.value.trim())return alert('輸入不能為空')
  todos.editTodo(t.id,event.target.value)
}

function handelCheck(id){
  todos.checkTodo(id)
}
</script>
<template>
    <ul class="todoList-content">
      <li class="todoList-item" v-for="t in todos.todos" :key="t.id">
        <div class="todoList-text">
          <input type="checkbox" :checked="t.done" @change="handelCheck(t.id)">
          <span  v-show="!t.isEdit">{{t.title}}</span>
          <input type="text" v-show="t.isEdit" :value="t.title" @blur="handelEdit(t,$event)" @keyup.enter="handelEdit(t,$event)">
        </div>
        <div class="todoList-button">
          <button class="todoList-button-edit" @click="edit(t)">編輯</button>
          <button class="todoList-button-del" @click="del(t.id)">刪除</button>
        </div>
      </li>
    </ul>
</template>