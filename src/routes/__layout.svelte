<script>
  import '../global.css';
</script>

<div class="vw-100 vh-100 bg-clr-semantic-neutral-abswhite" id="application-layout">
  <layout class="layout-grid d-grid">
    <navbar
      class="shadow-level-1 d-grid align-items-center justify-content-between px-xl-clamp py-xs-clamp"
      style="--row-gap: var(--bp-md-spacing-clamp); --column-gap: var(--bp-md-spacing-clamp);"
    >
      <navbarTitle class="flex ft-parragraph-clamp"> Custom Route </navbarTitle>
      <buttonsSection class="flex">
        <button
          class="ft-parragraph-clamp flex  no-wrap border-0 bg-clr-semantic-warning-base flex-grow-1"
        >
          second entry
        </button>
        <button
          class="ft-parragraph-clamp flex no-wrap  border-0 bg-clr-semantic-warning-base flex-grow-1"
        >
          third entry
        </button>
      </buttonsSection>
    </navbar>
    <slot />
  </layout>
</div>

<style lang="scss">
  navbar {
    grid-template-columns: 1fr auto;
  }
  @media only screen and (max-width: 767px) {
    navbar {
      grid-template-columns: 1fr;
    }
    buttonsSection {
      flex-direction: column;
    }
  }
</style>
