<template>
  <header>
    <div>
      <router-link to="/">
        <img class="logo" src="@/assets/logo.svg" />
      </router-link>
      <div class="social">
        <a href="https://www.uplabs.com/rhynoartworks" target="_blank" title="Uplab">
          <img src="@/assets/uplabs.svg" />
        </a>
        <a href="https://www.instagram.com/rhynoartworks/" target="_blank" title="Instagram">
          <img src="@/assets/instagram-icon.svg" />
        </a>
        <a href="https://github.com/hunter-isaiah96" target="_blank" title="Github">
          <img src="@/assets/github-icon.svg" />
        </a>
        <a href="mailto:hunter.isaiah96@gmail.com" target="_blank" title="Email">
          <img src="@/assets/email-icon.svg" />
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  margin: 4em 0;
  .logo {
    width: 220px;
    margin-bottom: 25px;
  }
  .social img {
    width: 20px;
    margin-right: 30px;
  }
}
</style>
