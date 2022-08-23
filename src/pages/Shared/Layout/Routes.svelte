<script lang="ts">
    import {Router, Link, Route} from 'svelte-routing';
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faBars} from '@fortawesome/free-solid-svg-icons/index.es';
    import Home from "../../Home/Home.svelte";
    import About from "../../About/About.svelte";
    import Contact from "../../Contact/Contact.svelte";
    import Membership from "../../Membership/Layout/Membership.svelte";
    import DesignSystem from "../../DesignSystem/DesignSystem.svelte";
    import LogIn from "../../Authentication/Layout/LogIn.svelte";
    import SignUp from "../../Authentication/Layout/SignUp.svelte";
    let mainMenuClass:string = 'main-menu';

    export function showHideMenu() {
        if(mainMenuClass === 'main-menu') {
            mainMenuClass = 'main-menu main-menu--show';
        } else {
            mainMenuClass = 'main-menu';
        }
    }

</script>
<Router>
    <nav class="main-nav">
        <div on:click={()=> showHideMenu()} class="toggle-menu">
            <Fa color="secondary" icon={faBars} border/>
        </div>
        <ul id="main-menu" class={mainMenuClass}>
            <li class="main-menu__item">
                <Link to="/">Home</Link>
            </li>
            <li class="main-menu__item">
                <Link to="/about">About</Link>
            </li>
            <li class="main-menu__item">
                <Link to="/contact">Contact</Link>
            </li>
            <li class="main-menu__item">
                <Link to="/membership">Membership</Link>
            </li>
            <li class="main-menu__item">
                <Link to="/designSystem">DesignSystem</Link>
            </li>
            <li class="main-menu__item">
                <Link to="/logIn">LogIn</Link>
            </li>
            <li class="main-menu__item">
                <Link to="/signUp">SignUp</Link>
            </li>
        </ul>
    </nav>
    <div class="layout">
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
        <Route path="/membership">
            <Membership/>
        </Route>
        <Route path="/designSystem">
            <DesignSystem/>
        </Route>
        <Route path="/logIn">
            <LogIn/>
        </Route>
        <Route path="/signUp">
            <SignUp/>
        </Route>
    </div>
</Router>
<style>

    :global(body) {
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
    }

    :global(a) {
        color: white;
    }
    :global(a:visited){
        color: white;
    }

    .layout {
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .toggle-menu{
        position: absolute;
        top: 0.5rem;
        right: 1.5rem;
        cursor: pointer;
        padding: 0.35em;
        z-index: 1;
        border-radius: 5px;
        background: rgba(231, 232, 234, 0.33);
    }
    @media (min-width: 768px) {
        .toggle-menu{
            display: none;
        }
    }

    .main-menu {
        list-style: none;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(51, 54, 82);
        transition: transform 0.3s;
        transform: translateY(-100%);
    }

    .main-menu--show{
        transform: translateY(0);
    }

    @media (min-width: 768px) {
        .main-menu {
            flex-direction: row;
            transform: translateY(0);
        }
    }

    .main-menu__item {
        padding: 1em;
    }
</style>