<script>
import Card from "../Shared/Card.svelte";
import Input from "../Shared/Input.svelte";
import Button from "../Shared/Button.svelte";
import Toggle from "../Shared/Toggle.svelte";
import DropDownList from "../Shared/DropDownList/DropDownList.svelte";
import Table from "../Shared/Table/Table.svelte";

let options = [
    {id: 1, label: 'prueba 1', x: 1},
    {id: 2, label: 'prueba 2', x: 2},
    {id:3, label: 'prueba 3', x: 1}
    ];

</script>

<div>
    <h1>Image Card</h1>
    <Card title="Titulo">
        <div slot="body">
            <p>Esto es una prueba</p>
        </div>
    </Card>
    <h1>Buttons</h1>
    <Button btnText="click me"></Button>
    <h1>Inputs</h1>
    <h2>Text input</h2>
    <Input placeHolder={'Email'}></Input>
    <h2>Toogle input</h2>
    <Toggle></Toggle>
    <h2>DropDown List</h2>
    <DropDownList options="{options}" key="label"></DropDownList>
    <h1>Tables</h1>
    <Table data="{options}"></Table>

</div>