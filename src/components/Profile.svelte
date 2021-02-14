<script>
  import profile from "images/profile.jpg";

  export let title = "R-BT";
</script>

<div class="profile">
  <img alt="Richard Beattie" src={profile} />
  <div>
    <h1>{title}</h1>
    <div class="links">
      <a href="mailto:richard.beattie91@gmail.com"
        ><img src="email.svg" alt="Email Richard" /></a
      >
      <a href="https://twitter.com/r_bt_"
        ><img src="twitter.svg" alt="Richard's Twitter" /></a
      >
      <a href="https://github.com/r-bt"
        ><img src="github.svg" alt="Richard's Github" /></a
      >
      <a href="https://www.linkedin.com/in/richard--beattie/"
        ><img src="linkedin.svg" alt="Richard's LinkedIn" /></a
      >
    </div>
  </div>
</div>

<style>
  div.profile {
    display: flex;
    align-items: center;
  }

  .profile > img {
    width: 100px;
    height: 100px;
    display: inline-block;
  }

  .profile > div {
    padding: 0 2rem;
  }

  div.links > a {
    margin-right: 0.5rem;
  }

  div.links > a > img {
    width: 25px;
  }
</style>
