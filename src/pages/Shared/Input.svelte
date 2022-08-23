<script lang="ts">
    export let placeHolder:string|number='';
    export let value: string| number='';
    export let margin: number=0.3125;
    let cssRoot = document.documentElement;
    $:console.log(margin);
    $:cssRoot.style.setProperty('--margin', margin+'em');
</script>
<div class="wrap-input">
    <input id="input" class="input" bind:value={value} required/>
    <span class="placeholder">{placeHolder}</span>
</div>
<style>
    :root{
        --margin: 0.3125em;
    }
    .wrap-input{
        position: relative;
        font-size: 14px;
        padding-top: 1.25rem;
        margin-bottom: var(--margin);
    }


    .wrap-input .input{
        margin: 0;
        height: 2rem;
        border-width: 0 0 1px;
        padding: .75rem;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 5px;
        outline: none;
        background-color: #fff;
        color: #494949;
        font-size: 14px;
    }
    .input:focus{
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    }
    .input:hover{
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    }

    .wrap-input .placeholder {
        position: absolute;
        top: calc(50% + 0.75rem);
        /*left: 12px*/
        left: .75rem;
        transform: translateY(-50%);
        color: #aaa;
        transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
    }
    .wrap-input input:valid + .placeholder,
    .wrap-input input:focus + .placeholder {
        top: .625rem;
        /*font-size: equivalent to 10px*/
        font-size: 0.625rem;
        color: #3b3e5e
    }
</style>