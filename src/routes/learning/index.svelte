<script>
  import { onMount } from "svelte";
  import Profile from "../../components/Profile.svelte";
  import { getPosts, posts, status } from "./posts";

  onMount(() => {
    getPosts();
  });
</script>

<svelte:head>
  <title>R-BT - Learning</title>
</svelte:head>

<Profile title="Learning in Public" />

{#if $status === "error"}
  <p>Hum...soenthing went wrong. Please try refreshing</p>
{/if}

<p>
  Here are some things I'm thinking about or find interesting. These are drafts
  and will be messy
</p>

<ul>
  {#if $posts.length === 0 && $status === "loading"}<span>Loading...</span>{/if}
  {#each $posts as item (item.id)}
    <li><a href="learning/{item.slug}">{item.Name}</a></li>
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
