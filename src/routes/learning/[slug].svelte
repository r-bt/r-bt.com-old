<script context="module">
  export function preload(page) {
    return { slug: page.params.slug };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { Notion } from "notion-in-svelte";
  import "prismjs/themes/prism-okaidia.css";
  // Stores
  import { posts, getPosts } from "./posts";
  // COMPONENTS
  import Profile from "../../components/Profile.svelte";
  import config from "../../config";

  export let slug;
  let blocks;

  $: if ($posts && process.browser) {
    const post = $posts.find((post) => post.slug === slug);
    if (post) {
      fetch(`${config.NOTION_API}/page/${post.id}`).then(async (res) => {
        const post = await res.json();

        const objectArray = Object.entries(post);
        blocks = objectArray.map(([key, value]) => {
          return value.value;
        });
      });
    }
  }

  onMount(() => {
    getPosts();
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
