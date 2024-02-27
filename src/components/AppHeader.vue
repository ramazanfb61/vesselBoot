<script setup></script>

<template>
  <header class="w-100 border bg-red" style="position: absolute; z-index: 2">
    <div class="text-center d-flex ms-auto justify-content-around py-1 w-50">
      <div class="d-block">tel</div>
      <div class="d-none d-sm-block">e-mail</div>
      <div class="d-none d-sm-block">teklif</div>
    </div>
    <nav class="text-white navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link
          class="navbar-brand text-white border opacity-100 bg-danger w-25"
          style="letter-spacing: 6px; font-size: 36px"
          to="/"
          >ARMA</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list text-white" style="font-size: 28px"></i>
        </button>
        <div
          class="collapse navbar-collapse border"
          id="navbarSupportedContent"
        >
          <ul
            class="navbar-nav border w-75 bg-white ps-4 p-3 ms-auto mb-2 mb-lg-0"
          >
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/"
                >Anasayfa</RouterLink
              >
              <!-- <a class="nav-link active" aria-current="page" to="/">Ev</a> -->
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/kurumsal"
                >Kurumsal</RouterLink
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genleşme Tankları
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" to="/urunlerimiz"
                    >Ürünlerimiz</RouterLink
                  >
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.bg-red {
  background-color: rgba(0, 0, 0, 0.2);

  border: 1px solid black;
}

/* a[class^="nav-link"] {
  color: white !important;
} */
</style>
