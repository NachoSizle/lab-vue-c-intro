<script setup>
import { useTasksStore } from '@/stores/tasksStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const tasksStore = useTasksStore();
const { tasks, notCompletedTasks } = storeToRefs(tasksStore);

const taskTitle = ref('');

const _addTask = async () => {
  const task = {
    user_id: '5e88bcfc-fc98-4204-bd2f-3f6f14f35ecc',
    title: taskTitle.value,
    is_complete: false,
  }

  await tasksStore.createNewTask(task);
  tasksStore.fetchTasks();
  taskTitle.value = '';
};

onMounted(() => {
  tasksStore.fetchTasks();
})
</script>

<template>
  <section>
    <span>Tasks: {{ tasks.length }}</span>
    <span>Not completed: {{ notCompletedTasks.length }}</span>
    <br />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
    <div>
      <label>
        Task title:
        <input type="text" v-model="taskTitle" />
      </label>
      <button @click="_addTask">Add task</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>