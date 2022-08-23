<script lang="ts">
    export let value:boolean=true;
</script>
<div class="wrap-toggle">
    <input type="checkbox" id="toggle" class="offscreen" bind:checked={value}/>
    <label for="toggle" class="switch"></label>
</div>
<style>
    .wrap-toggle {
    }
    .switch{
        position: relative;
        display: inline-block;
        width: 4em;
        height: 2em;
        background: #bec6ce;
        border-radius: 40px;
        cursor: pointer;
    }
    .switch:after {
        content: '';
        position: absolute;
        width: 1.5em;
        height: 1.5em;
        border-radius: 30px;
        background: #fff;
        left: 0.25em;
        top: 0.25em;
        transition: transform 0.3s;
    }

    input[type='checkbox']:checked + .switch::after {
        transform: translateX(2em);
    }

    input[type='checkbox']:checked + .switch {
        background: #527379;
    }

    .offscreen{
        display: none;
    }
</style>