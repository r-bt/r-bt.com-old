<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a
        aria-current="{segment === undefined ? 'page' : undefined}"
        href="."
      >Home</a>
    </li>
    <li>
      <a
        aria-current="{segment === 'about' ? 'page' : undefined}"
        href="about"
      >About</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current="{segment === 'blog' ? 'page' : undefined}"
        href="blog"
      >Blog</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current="{segment === 'learning' ? 'page' : undefined}"
        href="learning"
      >Learning</a>
    </li>
    <!-- <li>
      <a
        rel="prefetch"
        aria-current="{segment === 'books' ? 'page' : undefined}"
        href="books"
      >Books</a>
    </li> -->
    <li>
      <a
        rel="prefetch"
        aria-current="{segment === 'links' ? 'page' : undefined}"
        href="links"
      >Links</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
    margin: auto;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
    position: relative;
    padding: 0.2rem;
  }

  a[aria-current] {
    font-weight: 500;
  }

  a:after {
    bottom: -4px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 150%;
  }

  @media (max-width: 600px) {
    ul {
      padding: 0;
    }
    li {
      display: inline-block;
      padding: 0 1rem 1rem 0;
      margin-top: 0.3rem;
    }

    a:hover:after {
      width: 120%;
    }
  }
</style>
