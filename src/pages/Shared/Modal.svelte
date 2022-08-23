<script lang="ts">
    let shown = false;
    export let times:boolean = true;
    export let title:string = '';

    export function show() {
        shown = true;
    }

    export function hide() {
        shown = false;
    }
</script>

<svelte:window on:keydown={(e)=> {
        if(e.keyCode === 27) {
            hide();
        }
    }}
/>
{#if shown}
    <div class="modal-wrapper">
        <div class="modal">
            {#if times}
                <div class="header">
                    <h2 class="title">{title}</h2>
                    <span class="close" on:click={hide}> &times; </span>
                </div>
            {/if}
            <div class="body">
                <slot/>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-wrapper {
        background-color: rgba(98, 94, 94, 0.5);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .modal {
        border-radius: 5px;
        width: min-content;
        background-color: #f0f0f0;
        max-width: 80vw;
        padding: 1rem;
        margin: 15% auto;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .body {
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .close {
        float: right;
        cursor: pointer;
        font-size: 3rem;
    }

    .close:hover {
        font-weight: bold;
    }
</style>