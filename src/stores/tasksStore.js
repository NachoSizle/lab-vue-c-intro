import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { createTask, fetchAllTasks } from "@/utils/apiTasks";

export const useTasksStore = defineStore('tasks', () => {
  // State
  const tasks = ref([])
  
  // Getters
  const notCompletedTasks = computed(() => {
    return tasks.value.filter(task => !task.is_complete)
  });

  const tasksByDate = computed(() => {
    return tasks.value.sort((a, b) => new Date(b.inserted_at) - new Date(a.inserted_at))
  })

  // Actions
  async function fetchTasks() {
    try {
      // Call to the API
      const data = await fetchAllTasks()
      console.log(data)
      // Update the state
      tasks.value = data
    } catch(err) {
      console.error(err)
    }
  }

  async function createNewTask(task) {
    try {
      // Call to the API
      await createTask(task)
    } catch(err) {
      console.error(err)
    }
  }

  return {
    // State
    tasks,
    // Getters
    notCompletedTasks,
    tasksByDate,
    // Actions
    fetchTasks,
    createNewTask,
  }
});