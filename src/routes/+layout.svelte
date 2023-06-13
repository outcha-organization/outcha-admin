<script>
  import "$lib/sass/global.sass";
  import { fade } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let sidebarVisible = false;
</script>

<div id="header">
  <div class="is-flex is-align-items-center">
    <button on:click={() => sidebarVisible = true} class="hamburger">
      <Icon icon="fa-solid:bars" />
    </button>

    <a class="logo" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>
  </div>

  <div>
    <button class="icon">
      <Icon icon="fa6-solid:bell" />
    </button>

    <a class="button">
      <span class="icon">
        <Icon icon="material-symbols:download" />
      </span>
      Download
    </a>
  </div>
</div>

<div id="sidebar" class:visible={sidebarVisible}>
  <div id="sidebar-header">
    <a class="logo" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <button on:click={() => sidebarVisible = false} class="close">
      <Icon icon="fa-solid:times" />
    </button>
  </div>

  <div id="sidebar-body">
    <div class="placeholder">NAV</div>
  </div>

  <div id="sidebar-footer">
    <span class="icon mr-2" style="font-size: 3rem">
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
  $header-height: 56px
  $sidebar-width: 30%
  $sidebar-max-width: 360px
  $sidebar-footer-height: 42px

  :global(body)
    padding-top: $header-height

  #header
    background-color: #fff
    box-shadow: 0 1px 1px rgba(31, 33, 36, 0.1)
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $header-height
    padding: 0 16px
    display: flex
    justify-content: space-between
    align-items: center
    z-index: 2

    h1
      font-size: 20px
      font-weight: 400
      line-height: 36px
      color: #18181a

    button
      border-radius: 3px
      border: none
      cursor: pointer
      background-color: transparent
      display: inline-flex
      justify-content: center
      align-items: center
      margin-right: 8px
      width: 36px
      height: 36px

      &:hover
        background-color: #f1f2f4

      &.hamburger
        +desktop
          display: none

      &.icon
        color: #616a75
        font-size: 18px

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
    z-index: 3
    transform: translateX(-100%)
    transition: transform 0.3s ease-in-out

    +desktop
      z-index: 1
      transform: translateX(0)
      transition: none
      top: $header-height
      width: $sidebar-width
      height: calc(100vh - $header-height)

    &.visible
      transform: translateX(0)
      transition: transform 0.3s ease-in-out

  #sidebar-header
    display: flex
    align-items: center
    justify-content: space-between
    height: $header-height
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
      font-size: 18px
      color: #5c5f62
      border-radius: 50%
      border: none
      background-color: transparent
      cursor: pointer
      display: inline-flex
      justify-content: center
      align-items: center
      margin-left: 8px
      width: 36px
      height: 36px

      &:hover
        background-color: #eee

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
    z-index: 2
    width: 100vw
    height: 100vh
    background-color: #000
    opacity: 0.5

    +desktop
      display: none

  #content
    padding: 16px
    min-height: calc(100vh - $header-height)

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