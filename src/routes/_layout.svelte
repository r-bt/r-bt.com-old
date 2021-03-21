<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<main>
  <div class="content">
    <div class="nav">
      <Nav {segment} />
    </div>
    <div class="main">
      <slot />
    </div>
  </div>
</main>

<style>
  div.content {
    min-height: 100vh;
  }

  div.main {
    padding: 4rem;
    width: 80%;
    box-sizing: border-box;
  }

  div.nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
  }

  @media (max-width: 600px) {
    div.main {
      width: 100%;
      padding: 1rem 2.25rem;
    }
    div.nav {
      position: relative;
    }
  }
</style>
