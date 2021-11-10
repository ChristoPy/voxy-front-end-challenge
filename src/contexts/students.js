import {
  reactive,
  provide,
  inject,
} from 'vue'
import studentsMock from '../mocks/students.json'

const baseState = {
  all: studentsMock,
  current: studentsMock
}

export const studentsStateSymbol = Symbol('students')
export const useStudentsState = () => inject(studentsStateSymbol)
export const createStudentsState = () => {
  const state = reactive(baseState)

  const setCurrentStudents = (students) => {
    state.current = students.value
  }

  return {
    state,
    setCurrentStudents,
  }
}
export const provideStudentsState = () => provide(studentsStateSymbol, createStudentsState())
