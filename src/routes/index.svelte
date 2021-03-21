<script>
  import Profile from "../components/Profile.svelte";
  // import { posts } from "./blog/_posts";
  // const latestPost = posts[0];
</script>

<svelte:head>
  <title>R-BT</title>
  <meta name="description" content="R-BT personal site" />
</svelte:head>

<Profile />

<div class="brief info">
  <p>Hi I'm Richard. This site is a place for me to collect all my thoughts.</p>
  <!-- <div class="section">
    <h3>What have I recently written:</h3>
    <a href="/blog/{latestPost.permalink}">{latestPost.title}</a>
  </div> -->
  <div class="section">
    <h3>What I'm currently working on</h3>
    <a href="https://prepsheets.com">PrepSheets</a>
  </div>
  <div class="section">
    <h3>What I previously worked on</h3>
    <a
      href="https://abstracts.societyforscience.org/Home/FullAbstract?ProjectId=17466"
      >BatIdentification</a
    >
    <a href="https://www.producthunt.com/posts/ndesk">NDesk</a>
  </div>
</div>

<style>
  .section {
    margin-bottom: 2rem;
  }

  .section a {
    display: block;
    margin-top: 0.5rem;
  }
</style>
