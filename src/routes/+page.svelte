<script lang="ts">
  import { addTodo, deleteTodo, todos, toggleTodo } from '$lib/todoService'
  import { onMount } from 'svelte'

  let newTodoText = ''

  // Subscribe to the todos store
  $: todosList = $todos

  onMount(() => {
    // Fetch initial todos
    todosList = $todos
  })

  const addNewTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = addTodo(newTodoText.trim())
      newTodoText = ''
    }
  }

  const toggleTodoStatus = (id: number) => {
    toggleTodo(id)
  }

  const removeTodo = (id: number) => {
    deleteTodo(id)
  }
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
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li on:click={() => toggleTodoStatus(id)} class:completed>
        {text}
        <button
          on:click={(event) => {
            event.stopPropagation()
            removeTodo(id)
          }}
        >
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
