<script lang="ts">
  import Routes from "./Routes.svelte";


  let mainMenuClass: string = 'main-menu';

  export function showHideMenu() {
    if (mainMenuClass === 'main-menu') {
      mainMenuClass = 'main-menu main-menu--show';
    } else {
      mainMenuClass = 'main-menu';
    }
  }

  export let name: string;
</script>

<div class="header">
    <Routes>
    </Routes>
</div>

<style>
    .body{
        background-color: rgba(187,183,186,0.54);
    }
</style>
