<script lang="ts">
  import {onMount} from 'svelte';
  import {FetchUserRepository} from '../../../Modules/Membership/Infrastructure/FetchUserRepository';
  import type {User} from "../../../Modules/Membership/Domain/User";
  import Modal from "../../Shared/Modal.svelte";
  import {SearchAllUsers} from "../../../Modules/Membership/services/SearchAllUsers";
  import {CreateUser} from "../../../Modules/Membership/services/CreateUser";
  import {DeleteUser} from "../../../Modules/Membership/services/DeleteUser";
  import Card from "../../Shared/Card.svelte";
  import Input from "../../Shared/Input.svelte";
  import Button from "../../Shared/Button.svelte";

  let modal;
  let modalUpdate;
  let deleteConfirmModal;

  const userFinder: SearchAllUsers = new SearchAllUsers(new FetchUserRepository());
  const userCreator: CreateUser = new CreateUser(new FetchUserRepository());
  const userRemover: DeleteUser = new DeleteUser(new FetchUserRepository());

  let loaded: boolean = false;
  let users: Array<User> = [];
  onMount(async () => {
    users = await userFinder.run();
    loaded = true;
    }
  );

  let user: User;

  function createUser(event) {
    const formData = new FormData(event.target);
    let user: User = Object.fromEntries(formData.entries()) as User;
    user.id = self.crypto.randomUUID();
    userCreator.run(user);
    users = [...users, user];
    modal.hide();
  }

  function updateUser(event) {
    if (selectUser?.id == null) {
      throw new Error('parameter required');
    }
    if (selectUser?.name == null) {
      throw new Error('parameters required');
    }

    if (selectUser?.mail == null) {
      throw new Error('parameters required');
    }

    if (selectUser?.password == null) {
      throw new Error('parameters required');
    }


    userCreator.run(selectUser);
    users = users.map(element => element.id === selectUser.id ? {...selectUser} : element)
    modalUpdate.hide();
  }

  function deleteUser() {
    let userForDelete: User = selectUser;
    userRemover.run(userForDelete.id);
    users = users.filter(filterUser => filterUser.id !== userForDelete.id);
    deleteConfirmModal.hide();
  }


  let selectUser: User;

</script>
<div class="body">
    <div class="header">
        <h1>Membership</h1>
        <span on:click={()=> modal.show()} class="add-button">
    <img class="add-image" src="images/add-user.png" alt=""/>
    </span>
    </div>
    <div class="container">
        {#each users as user}
            <Card title="{user.name}" class="card-body">
                <span slot="header">
                    <span class="card-button">
                        <img class="card-image" on:click={()=> {modalUpdate.show(); selectUser = user}}
                             src="images/edit.png" alt="something"/>
                    </span>
                    <span class="card-button">
                        <img class="card-image" on:click={()=> {deleteConfirmModal.show(); selectUser = user }}
                             src="images/trash-bin.png" alt="trash"/>
                    </span>
                </span>
                <div slot="body">
                    <p class="user-last-name">{user.mail}</p>
                </div>
            </Card>
        {/each}
        {#if loaded}
            {#await import('../../Shared/Table/Table.svelte') then table}
                <svelte:component data="{users}" this={table.default}/>
            {/await}
        {/if}
    </div>
    <Modal bind:this={modal}>
        <form on:submit|preventDefault={createUser}>
            <h3>Creating User</h3>
            <label for="name">Name</label>
            <input id="name" name="name" type="text"/>
            <label for="mail">Mail</label>
            <input id="mail" name="mail" type="text"/>
            <label for="password">Password</label>
            <input id="password" name="password" type="password"/><br/>
            <button type="submit">CreateUser</button>
        </form>
    </Modal>
    <Modal title="Updating User" bind:this={modalUpdate}>
        <div class="form">
            <Input bind:value={selectUser.name} placeHolder="name"></Input>
            <Input bind:value={selectUser.mail} placeHolder="mail"></Input>
            <Input bind:value={selectUser.password} placeHolder="password"></Input>
            <div class="submit-button">
                <Button btnText="Update User" on:click={updateUser}></Button>
            </div>
        </div>
    </Modal>
    <Modal bind:this={deleteConfirmModal} times={false}>
        <h3>Are you sure that you want remove this user</h3>
        <div class="modal-buttons">
            <button on:click={deleteUser}>Confirm</button>
            <button on:click={deleteConfirmModal.hide}>Cancel</button>
        </div>
    </Modal>
</div>

<style>
    .body {
        margin: 0;
        width: 100%;
        position: relative;
    }

    .header {
        padding: 2em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
        }
    }

    .add-image {
        width: 50px;
        height: 50px;
    }

    .card-button {
        height: 1rem;
        width: 1rem;
    }

    .card-image {
        height: 1rem;
        width: 1rem;
    }

    img:hover {
        cursor: pointer;
        filter: invert(7%);
    }

    .container {
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        position: relative;
    }

    .card-body {
        display: flex;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .submit-button {
        margin-top: 1rem;
    }
</style>
