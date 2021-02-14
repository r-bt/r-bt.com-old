<script>
  import { onMount } from "svelte";
  import Profile from "../../components/Profile.svelte";
  import config from "../../config";

  let isError = false;
  let items = [];
  $: console.log(items);
  onMount(() => {
    fetch(
      `${config.NOTION_API}/table/489999d5f3d240c0a4fedd9de71cbb6f?v=193cd8d6cfaf4b09b93cbf6377e90b8b`
    )
      .then(async (resp) => {
        items = (await resp.json()).filter((item) => item.Status === "Visible");
      })
      .catch((err) => {
        isError = true;
      });
  });
</script>

<svelte:head>
  <title>R-BT - Learning</title>
</svelte:head>

<Profile title="Learning in Public" />

{#if isError}
  <p>Hum...soenthing went wrong. Please try refreshing</p>
{/if}

<p>
  Here are some things I'm thinking about or find interesting. These are drafts
  and will be messy
</p>

<ul>
  {#if items.length === 0 && !isError}<span>Loading...</span>{/if}
  {#each items as item (item.id)}
    <li><a href="learning/{item.id}">{item.Name}</a></li>
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
