<script lang="ts">
    import Card from "../../Shared/Card.svelte";
    import Input from "../../Shared/Input.svelte";
    import Button from "../../Shared/Button.svelte";
</script>

<h1>LogIn</h1>
<Card title="input fields">
    <div slot="body" class="body">
        <div class="inputs">
            <Input margin="0" placeHolder="email or username"></Input>
            <Input placeHolder="password"></Input>
            <Button btnText="LogIn"></Button>
        </div>
    </div>
</Card>

<style>
    .body{
        margin: 1em;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        margin: 1em;
    }
</style>