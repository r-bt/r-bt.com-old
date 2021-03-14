<script context="module">
  import { sotion } from "sotion";

  export async function preload() {
    const posts = await sotion.getScope();
    return { posts };
  }
</script>

<script>
  import Profile from "../../components/Profile.svelte";

  export let posts;
</script>

<svelte:head>
  <title>R-BT - Learning</title>
  <meta
    name="description"
    content="A collection of posts about anything I find interesting"
  />
</svelte:head>

<Profile title="Learning in Public" />

<p>
  Here are some things I'm thinking about or find interesting. These are drafts
  and will be messy
</p>

<ul>
  {#if posts.length === 0}<span>Loading...</span>{/if}
  {#each posts as item (item.id)}
    {#if item.slug && item.Status === "Visible"}
      <li><a rel="prefetch" href="learning/{item.slug}">{item.Name}</a></li>
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
