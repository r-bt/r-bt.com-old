<script>
  import Profile from '../components/Profile.svelte';
</script>

<svelte:head>
  <title>R-BT - About</title>
</svelte:head>

<Profile title="About" />

<div class="about">
  <p>
    Hey, 👋. I'm Richard. I'm 19, live in Ireland and am currently on a Gap
    Year.
    <br />
    Next year I'll be studying computer science (probably) at MIT.
  </p>

  <p>
    I've worked on lots of different projects but I'm hoping to begin a clean
    slate
    <br />
    with this website. So expect this website to update over the next year
  </p>

  <h3>Contact me</h3>
  <p>If you're like me and also talking to people but are nervous when starting conversations, <br> here's some ways to contact me:</p>
  <ul>
    <li>Ask for comments on a blog you've recently written</li>
    <li>Talk about an interesting thought that came to you</li>
    <li>Talk about project you've been working on</li>
  </ul>
</div>

<div class="aside">
  <p>
    P.S: This site is made with
    <a href="https://svelte.dev/" rel="noopener">Svelte</a>
    and
    <a href="https://sapper.svelte.dev/" rel="nopener">Sapper</a>. If you make
    <br />
    websites you should check them out
  </p>
</div>

<style>
  div.aside {
    font-size: 12px;
  }
</style>
