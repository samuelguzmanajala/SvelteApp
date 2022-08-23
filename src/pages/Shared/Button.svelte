<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let btnText: string = '';
  const dispatch = createEventDispatcher();
  function onCLick() {
    dispatch('click');
  }


</script>
<button on:click={onCLick} class="button">{btnText}</button>

<style>
    .button {
        margin:0;
        background-color: #3b3e5f;
        border: none;
        border-radius: 5px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        transition: 0.5s ease-in-out;
    }
    .button:hover {
        background-color: #2b2d45;
    }
    button:active {
        transform: translateY(.05rem);
    }
</style>