<script>
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
          class="ft-parragraph-c flex col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-primary-brand-blue-500-active flex-grow-1"
        >
          hello there
        </button>
        <button
          class="ft-parragraph-c flex col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-primary-brand-blue-500-active flex-grow-1"
        >
          hello there
        </button>
        <button
          class="ft-parragraph-c flex col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-primary-brand-blue-500-active flex-grow-1"
        >
          hello there
        </button>
        <button
          class="ft-parragraph-c flex col-xs-6 col-sm-4  border-0 bg-clr-secondary-brand-yellow-500 bg-clr-primary-brand-blue-500-active flex-grow-1"
        >
          hello there
        </button>
      </div>
    </navbar>
    <slot />
  </layout>
</div>
