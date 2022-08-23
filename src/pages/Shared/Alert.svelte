<script lang="ts">
  import { onMount } from 'svelte';
  enum TypeEnum {
    Success = 'alert alert-success',
    Info = 'alert alert-info',
    Warning = 'alert alert-warning',
    Danger = 'alert alert-danger'
  }

  let type: TypeEnum = TypeEnum.Info;
  let message: string = 'Hello World';
  let timeout: number = 2000;
  let showAlert: boolean = false;

  function changeClass(type: TypeEnum) {
    return "alert-" + type;
  }

  onMount(() => {
    setTimeout(() => {
      showAlert = false;
    }, timeout);
  });

</script>

{#if showAlert}
    <div class="alert-wrapper">
        <div class={type}>
            <p>{message}</p>
        </div>
    </div>
{/if}


<style>
    .alert-wrapper {
        z-index: 1;
        position: absolute;
        width: 100%;
    }

    .alert {

        text-align: center;
        margin: 0 auto;
        width: 80vh;
        padding: 0.01%;
        border-radius: 4px;
        transition: transform 2s;
        transform: translateY(-100%);
    }

    .alert-info {
        transform: translateY(0);
        background-color: rgba(217, 237, 247, 0.69);
        border-color: #bce8f1;
        color: #31708f;
    }

    .alert-success {
        background-color: rgba(223, 240, 216, 0.72);
        border-color: #d6e9c6;
        color: #3c763d;
    }

    .alert-danger {
        background-color: rgba(242, 222, 222, 0.87);
        border-color: #ebccd1;
        color: #a94442;
    }

    .alert-warning {
        background-color: rgba(252, 248, 227, 0.9);
        border-color: #faebcc;
        color: #8a6d3b;
    }
</style>