<script context="module">
  import { Sotion, sotion } from "sotion";
  export async function preload({ params }) {
    sotion.setScope("489999d5f3d240c0a4fedd9de71cbb6f").setFetch(this.fetch);
    try {
      const { blocks, meta } = await sotion.slugPage(params.slug);
      return { blocks, meta, slug: params.slug };
    } catch (e) {
      return e;
    }
  }
</script>

<script>
  import "prismjs/themes/prism-okaidia.css";

  import Profile from "../../components/Profile.svelte";

  export let blocks;
  export let meta;
  export let slug;
</script>

<svelte:head>
  {#if meta}
    <title>{meta.Name}</title>
    <meta name="twitter:title" content={meta.Name} />
    <meta property="og:title" content={meta.Name} />
    {#if meta.description}
      <meta name="description" content={meta.description} />
      <meta name="twitter:description" content={meta.description} />
      <meta property="og:description" content={meta.description} />
    {/if}
  {:else}
    <title>R-BT – Learning</title>
  {/if}

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@r_bt_" />
  <meta name="twitter:creator" content="@r_bt_" />
  <meta name="twitter:image" content="https://r-bt.com/profile.jpg" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://r-bt.com/learning/{slug}" />
  <meta property="og:image" content="https://r-bt.com/profile.jpg" />
  <meta property="og:site_name" content="R-BT Blog" />
</svelte:head>

<Profile title="Learning in Public" />

<div class="content">
  {#if blocks.length > 0}
    <Sotion {blocks} />
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

  :global(h2) {
    padding-top: 1.25rem;
  }
</style>
