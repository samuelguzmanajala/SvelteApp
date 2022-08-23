<script lang="ts">
  import {DdlType} from "./DdlType";

  export let options: Array<Object> = [];
  export let key;
  let localOptions: Array<DdlType> = options.map(option => {
      return new DdlType(option, key);
    }
  );
  export let selected;
</script>
<div class="wrap-ddl">
    <select class="select" bind:value={selected}>
        {#each localOptions as option}
            <option value="{option.value}">{option.label}</option>
        {/each}
    </select>
</div>
<style>
    .select{
        border-radius: 5px;
        border: none;
        background: #ffffff;
        width: 10rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    }
    .select:focus{
        border: 1px solid rgba(51, 54, 82, 0.47);
        outline: none;
    }
</style>