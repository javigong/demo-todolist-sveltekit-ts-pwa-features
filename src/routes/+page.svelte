<script lang="ts">
  import { onMount } from 'svelte';
  import { todos, addTodo, toggleTodo, deleteTodo } from '$lib/todoService';

  let newTodoText = '';

  // Subscribe to the todos store
  $: todosList = $todos;

  onMount(() => {
    // Fetch initial todos
    todosList = $todos;
  });

  const addNewTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = addTodo(newTodoText.trim());
      newTodoText = '';
    }
  };

  const toggleTodoStatus = (id: number) => {
    toggleTodo(id);
  };

  const removeTodo = (id: number) => {
    deleteTodo(id);
  };
</script>

<main>
  <h1>Todo List</h1>

  <input
    bind:value={newTodoText}
    placeholder="Add a new todo..."
    on:keyup={(event) => event.key === 'Enter' && addNewTodo()}
  />

  <ul>
    {#each todosList as { id, text, completed }}
      <li
        on:click={() => toggleTodoStatus(id)}
        class:completed={completed}
      >
        {text}
        <button on:click={(event) => { event.stopPropagation(); removeTodo(id); }}>
          Remove
        </button>
      </li>
    {/each}
  </ul>
</main>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #ddd;
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }

  li.completed {
    text-decoration: line-through;
  }
</style>
