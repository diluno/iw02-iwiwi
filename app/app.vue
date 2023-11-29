<template>
  <div class="container">
    <header class="header">
      <nav class="header__nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Musik</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="footer">
      <a href="mailto:kontakt@iwiwi.ch">kontakt@iwiwi.ch</a>
      <a href="#">download pressefotos</a>
    </footer>
  </div>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
}

main {
  padding: var(--gutter);
  padding-top: 5rem;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--black);
  padding: .5rem var(--gutter);

  z-index: 10;
  background: var(--offwhite);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  &__nav {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: .5rem;
    }

    a {
      text-decoration: none;
    }
  }

  @include mobile {
    font-size: .7rem;

    &__nav {
      ul {
        gap: .36rem;
      }
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: var(--gutter);
  border-top: 1px solid #000;
  margin-top: 4rem;

  .footer__text {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    display: flex;
    align-items: center;
    gap: 2px;
  }

  a {
    color: inherit;
    font-size: 1rem;
  }
}

a {
  color: inherit;
}
</style>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/cabinet-grotesk');

:root {
  --font-family-sans: 'Cabinet Grotesk';
  --font-family-mono: IMB Plex Mono;

  --gutter: 2rem;

  --offwhite: #FDFAF2;
  --white: #fff;
  --black: #000;
  --red: #F19EAE;

  @include mobile {
    --gutter: 1rem;
  }
}

html {
  background-color: var(--offwhite);
  font-family: var(--font-family-sans), sans-serif;
  font-weight: 500;
  text-size-adjust: 100%;
  font-size: 24px;

  @include mobile {
    font-size: 20px;
  }
}

body {
  margin: 0;
}

p {
  line-height: 1.4;
}

a {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--red);
  text-underline-offset: 2px;
}
</style>
