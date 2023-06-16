<script>
  import "$lib/sass/global.sass";
  import { fade } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let sidebarVisible = false;
</script>

<nav class="navbar has-shadow is-fixed-top is-flex is-justify-content-space-between px-1">
  <div class="navbar-brand">
    <button class="navbar-burger ml-0" on:click={() => sidebarVisible = true}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>

    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <button class="button is-white has-text-grey-dark">
          <span class="icon is-size-5">
            <Icon icon="fa6-solid:bell" />
          </span>
        </button>

        <div class="dropdown is-right is-hoverable">
          <div class="dropdown-trigger">
            <button class="button is-white has-text-grey-dark px-2">
              <span class="image is-32x32">
                <img src="https://cyrilsuzat.com/images/Cyril_Suzat.jpg" alt="Avatar" class="is-rounded">
              </span>
              <span class="ml-2 is-hidden-mobile">
                john@examp...
              </span>
            </button>
          </div>
          <div class="dropdown-menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item is-flex is-align-items-center">
                <span class="icon is-medium is-size-4 mr-1">
                  <Icon icon="mdi:account-box-outline" />
                </span>
                Manage account
              </a>
              <a href="#" class="dropdown-item is-flex is-align-items-center">
                <span class="icon is-medium is-size-4 mr-1">
                  <Icon icon="mdi:cog" />
                </span>
                Preferences
              </a>
              <a href="#" class="dropdown-item is-flex is-align-items-center">
                <span class="icon is-medium is-size-4 mr-1">
                  <Icon icon="mdi:weather-night" />
                </span>
                Dark mode
              </a>
              <a href="#" class="dropdown-item is-flex is-align-items-center">
                <span class="icon is-medium is-size-4 mr-1">
                  <Icon icon="mdi:weather-sunny" />
                </span>
                Light mode
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item is-flex is-align-items-center">
                <span class="icon is-medium is-size-4 mr-1">
                  <Icon icon="mdi:sign-out" />
                </span>
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<div id="sidebar" class:visible={sidebarVisible}>
  <div id="sidebar-header">
    <a href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" class="is-block">
    </a>

    <button on:click={() => sidebarVisible = false} class="close is-large"></button>
  </div>

  <div id="sidebar-body">
    <div class="placeholder">NAV</div>
  </div>

  <div id="sidebar-footer">
    <span class="icon mr-2 is-size-1">
      <Icon icon="ion:switch" />
    </span>
    Dark mode
  </div>
</div>

{#if sidebarVisible}
  <div
    transition:fade={{ duration: 300 }}
    class="backdrop"
    on:click={() => sidebarVisible = false}
  ></div>
{/if}

<div id="content">
  <div class="placeholder">
    <slot />
  </div>
</div>

<style lang="sass">
  $sidebar-width: 30%
  $sidebar-max-width: 360px
  $sidebar-footer-height: 42px

  #sidebar
    position: fixed
    display: flex
    flex-direction: column
    top: 0
    left: 0
    bottom: 0
    background-color: rgb(247, 250, 253)
    width: calc(100vw - 60px)
    min-width: 240px
    max-width: $sidebar-max-width
    border-right: 1px solid rgb(194, 205, 214)
    z-index: 31
    transform: translateX(-100%)
    transition: transform 0.3s ease-in-out

    +desktop
      z-index: 1
      transform: translateX(0)
      transition: none
      top: $navbar-height
      width: $sidebar-width
      height: calc(100vh - $navbar-height)

    &.visible
      transform: translateX(0)

  #sidebar-header
    display: flex
    align-items: center
    justify-content: space-between
    height: $navbar-height
    padding: 0 16px
    background-color: #fff
    box-shadow: 0 1px 1px rgba(31, 33, 36, 0.1)

    +desktop
      display: none

    h1
      font-size: 20px
      color: #212529
      font-weight: 500

    button.close
      +delete

  #sidebar-body
    padding: 16px
    flex-grow: 1

    &:after
      content: ""
      position: fixed
      left: 0
      bottom: $sidebar-footer-height
      width: 100%
      height: 2em
      pointer-events: none
      background: linear-gradient(rgba(247, 250, 253, 0) 0%, rgba(247, 250, 253, 0.698) 50%, rgb(247, 250, 253) 100%)

  #sidebar-footer
    display: flex
    justify-content: center
    align-items: center
    border-top: solid 1px rgb(229, 238, 245)
    padding: 0 16px
    height: $sidebar-footer-height
    color: rgb(69, 69, 69)

  .backdrop
    position: fixed
    top: 0
    left: 0
    z-index: 30
    width: 100vw
    height: 100vh
    background-color: #000
    opacity: 0.5

    +desktop
      display: none

  #content
    padding: 16px
    min-height: calc(100vh - $navbar-height)

    +desktop
      padding-left: calc(min($sidebar-width, $sidebar-max-width) + 16px)

  .placeholder
    display: flex
    justify-content: center
    align-items: center
    border: 2px dashed #ccc
    border-radius: 5px
    font-size: 16px
    font-weight: 400
    color: #212529
    padding: 30px
    height: 100%
</style>