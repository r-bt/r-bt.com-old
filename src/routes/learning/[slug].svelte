<script context="module">
  export function preload(page) {
    return { id: page.params.slug };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import "prismjs/themes/prism-okaidia.css";
  import { onMount } from "svelte";
  import Profile from "../../components/Profile.svelte";
  import config from "../../config";
  import { Notion } from "notion-in-svelte";

  export let id;
  let blocks;

  onMount(async () => {
    fetch(`${config.NOTION_API}/page/${id}`).then(async (res) => {
      const post = await res.json();

      const objectArray = Object.entries(post);
      blocks = objectArray.map(([key, value]) => {
        return value.value;
      });
    });
  });
</script>

<svelte:head>
  <title>R-BT - Learning</title>
</svelte:head>

<Profile title="Learning in Public" />

<div class="content">
  {#if blocks}
    <Notion {blocks} />
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<style>
  div.content {
    padding-top: 30px;
    width: 80%;
  }

  p {
    margin: 0;
  }
</style>
