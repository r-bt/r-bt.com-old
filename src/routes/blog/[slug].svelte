<script context="module">
  import { findPost } from "./_posts";

  export function preload(page) {
    const post = findPost(page.params.slug);
    return { post };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  import Profile from "../../components/Profile.svelte";
  import Index from "./index.svelte";

  export let post;

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = post.date.toLocaleDateString("en-IE", options);
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.description} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@r_bt_" />
  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.description} />
  <meta name="twitter:creator" content="@r_bt_" />
  <meta name="twitter:image" content="https://r-bt.com/profile.jpg" />
  <meta property="og:title" content={post.title} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://r-bt.com{$page.path}" />
  <meta property="og:image" content="https://r-bt.com/profile.jpg" />
  <meta property="og:description" content={post.description} />
  <meta property="og:site_name" content="R-BT Blog" />
</svelte:head>

<Profile title={post.title} />

<div class="summary">
  <h4><b>Summary:</b> {post.summary}</h4>
  <h5>{date}</h5>
</div>

<div class="content">
  {@html post.html}
</div>

<style>
  .summary {
    margin-top: 1rem;
    border-bottom: 1px solid rgb(33, 33, 33);
    max-width: 700px;
  }

  .summary > h4 {
    font-weight: 500;
    line-height: 1.5rem;
  }

  .content {
    max-width: 700px;
  }

  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
