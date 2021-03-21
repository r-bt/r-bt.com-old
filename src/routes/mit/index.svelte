<script>
  import Profile from "../../components/Profile.svelte";
</script>

<svelte:head>
  <title>R-BT - About</title>
  <meta name="description" content="About R-BT" />
</svelte:head>

<Profile title="MIT" />

<p>
  I'm getting ready to start MIT in August and there's lots of stuff to get in
  order, which seems like as good an excuse as any to write more
</p>

<ul>
  <li><a href="/mit/ases" rel="prefetch">📝 ASEs</a></li>
  <li><a href="/mit/dorms" rel="prefetch">🛏️ Dorms</a></li>
</ul>

<style>
  ul {
    list-style: none;
  }

  ul > li {
    font-size: 18px;
  }
</style>
