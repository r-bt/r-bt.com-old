<script>
  import { posts } from './_posts';
  import Profile from '../../components/Profile.svelte';

</script>

<svelte:head>
  <title>R-BT Blog</title>
</svelte:head>

<Profile title="Blog" />

<ul>
 {#each posts as post}
  <li>
      <a href="/blog/{post.permalink}">{post.title}</a>
  </li>
 {/each}
</ul>

<style>
  ul {
    margin: 1rem 0 1em 0;
    line-height: 1.5;
  }
</style>
