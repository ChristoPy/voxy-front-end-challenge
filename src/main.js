import './assets/main.css'
import { createApp } from 'vue'
import { studentsStateSymbol, createStudentsState } from './contexts/students'
import { searchStateSymbol, createSearchState } from './contexts/search'
import App from './App.vue'

createApp(App)
  .provide(studentsStateSymbol, createStudentsState())
  .provide(searchStateSymbol, createSearchState())
  .mount('#app')
