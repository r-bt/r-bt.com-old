<script context="module">
  import { sotion } from "sotion";

  export async function preload() {
    sotion.setScope("d10d9720a94e4f1a8bc2424a3dfa71a6").setFetch(this.fetch);
    const posts = await sotion.getScope();
    return { posts };
  }
</script>

<script>
  import Profile from "../../components/Profile.svelte";

  export let posts;
</script>

<svelte:head>
  <title>R-BT - Blog</title>
  <meta name="description" content="R-BT Blog Posts" />
</svelte:head>

<Profile title="Blog" />

<ul>
  {#if posts.length === 0}<span>Loading...</span>{/if}
  {#each posts as item (item.id)}
    {#if item.slug && item.Status === "Visible"}
      <li><a rel="prefetch" href="blog/{item.slug}">{item.Name}</a></li>
    {/if}
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    margin: 1rem 0 0 0;
    padding: 0;
  }

  li {
    padding: 0.25em 0;
  }
</style>
