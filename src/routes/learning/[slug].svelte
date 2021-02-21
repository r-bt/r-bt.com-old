<script context="module">
  export function preload(page) {
    return { slug: page.params.slug };
  }
</script>

<script>
  import { onMount } from "svelte";
  // import { Notion } from "notion-in-svelte";
  import { Notion, notion } from "@noahsalvi/svelte-notion";
  import "prismjs/themes/prism-okaidia.css";
  import { stores } from "@sapper/app";
  // Stores
  import { posts, getPosts } from "./posts";
  // COMPONENTS
  import Profile from "../../components/Profile.svelte";
  import config from "../../config";
  import profileImg from "images/profile.jpg";

  const { page } = stores();

  export let slug;
  let blocks = "";
  let post;

  $: if ($posts && process.browser) {
    post = $posts.find((post) => post.slug === slug);
    if (post) {
      // fetch(`${config.NOTION_API}/page/${post.id}`).then(async (res) => {
      //   const post = await res.json();

      //   const objectArray = Object.entries(post);
      //   blocks = objectArray.map(([key, value]) => {
      //     return value.value;
      //   });
      // });
      notion.fetchPage(post.id, window).then((resp) => (blocks = resp));
    }
  }

  onMount(() => {
    getPosts();
  });
</script>

<svelte:head>
  {#if post}
    <title>{post.Name}</title>
    <meta name="twitter:title" content={post.Name} />
    <meta property="og:title" content={post.Name} />
    {#if post.description}
      <meta name="description" content={post.description} />
      <meta name="twitter:description" content={post.description} />
      <meta property="og:description" content={post.description} />
    {/if}
  {:else}
    <title>R-BT – Learning</title>
  {/if}

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@r_bt_" />
  <meta name="twitter:creator" content="@r_bt_" />
  <meta name="twitter:image" content="https://r-bt.com{profileImg}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://r-bt.com{$page.path}" />
  <meta property="og:image" content="https://r-bt.com{profileImg}" />
  <meta property="og:site_name" content="R-BT Blog" />
</svelte:head>

<Profile title="Learning in Public" />

<div class="content">
  {#if blocks.length > 0}
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
