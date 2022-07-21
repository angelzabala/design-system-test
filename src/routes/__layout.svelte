<script>
  import Icon from '../components/Icon.svelte';
  import '../global.css';
</script>

<div class="vw-100 vh-100 bg-clr-semantic-neutral-abswhite" id="application-layout">
  <layout class="layout-grid">
    <navbar
      class="shadow-level-1 align-items-center justify-content-between px-xl-c py-xs-c"
    >
      <div class="flex ft-parragraph-c"> Custom Route </div>
      <div class="flex col-xl-gap-for-xs row">
        <button
          class="ft-parragraph-c d-flex align-items-center justify-content-center col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-secondary-brand-yellow-300-active flex-grow-1"
        >
          hello there
        </button>
        <button
          class="ft-parragraph-c d-flex align-items-center justify-content-center col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-secondary-brand-yellow-300-active flex-grow-1"
        >
          hello there
        </button>
        <button
          class="ft-parragraph-c d-flex align-items-center justify-content-center col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-secondary-brand-yellow-300-active flex-grow-1"
        >
          hello there
        </button>
        <button
          class="ft-parragraph-c d-flex align-items-center justify-content-center align-items-center col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-secondary-brand-yellow-300-active flex-grow-1"
        >
          <span>hello there</span>
          <Icon icon="one" className="bp-xl-spacing-c-for-md" size="max(2rem, 1.1vw)"/>
        </button>
      </div>
    </navbar>
    <slot />
  </layout>
</div>
