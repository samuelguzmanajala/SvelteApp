<script lang="ts">
  import {TableDataList} from "./TableDataList";
  import { createEventDispatcher } from 'svelte';

  export let data: Array<Object>;



  const dispatch = createEventDispatcher();
  function onCLick(row) {
    let ob = localData.fromPrimitives(row);
    dispatch('click', ob);
  }

  $: localData = new TableDataList(data);
  $: rows = localData.getRows();
  $: columnHeaders = localData.getKeys();

</script>

<div class="wrap-table">
    <table class="table">
        <thead class="head">
            <tr>
                {#each columnHeaders as columnHeader}
                    <th>{columnHeader}</th>
                {/each}
            </tr>
        </thead>
        <tbody class="body">
        {#each rows as row}
            <tr on:click={()=>{onCLick(row)}} class="body__tr">
                {#each row as column}
                    <td>{column}</td>
                {/each}
            </tr>
        {/each}
        </tbody>
        <tfoot>
        <slot name="tfoot">
        </slot>
        </tfoot>
    </table>
</div>


<style>
    table {
        border-collapse: collapse;
        width: 100%;
        border: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        background-color: #fff;
        overflow: hidden;
    }

    thead {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    th{
        padding: 1rem 2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        background-color: #ffffff;
        text-align: center;
        font-size: 0.9rem;
        font-weight: 900;
    }
    td{
        padding: 1rem 2rem;
        text-align: center;
        font-size: 0.9rem;
        font-weight: 900;
    }
    a {
        text-decoration: none;
        color: #256cbd;
    }
    .body__tr{
        cursor: pointer;
    }
    .body__tr:hover{
        background-color: #e7e8ea;
    }

</style>