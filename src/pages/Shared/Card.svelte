<script lang="ts">
    export let title:string = '';
</script>
<div class="card">
    <div class="header">
        <div class="title">
            <h2>{title}</h2>
        </div>
        <slot name="header" class="header">
        </slot>
    </div>
    <slot name="body">
    </slot>
</div>

<style>
    .card {
        background: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .title{
        margin:0;
    }
</style>