<script>
  import '../global.css';
</script>

<div class="vw-100 vh-100 bg-clr-semantic-neutral-abswhite" id="application-layout">
  <layout class="layout-grid d-grid">
    <navbar
      class="shadow-level-1 d-grid align-items-center justify-content-between px-xl-c py-xs-c"
      style="--row-gap: var(--bp-md-spacing-c); --column-gap: var(--bp-md-spacing-c);"
    >
      <div class="flex ft-parragraph-c"> Custom Route </div>
      <div class="flex">
        <button
          class="ft-parragraph-c flex  no-wrap border-0 bg-clr-secondary-brand-yellow-500 flex-grow-1"
        >
          second entry
        </button>
        <button
          class="ft-parragraph-c flex no-wrap  border-0 bg-clr-secondary-brand-yellow-500 flex-grow-1"
        >
          third entry
        </button>
      </div>
    </navbar>
    <slot />
  </layout>
</div>
