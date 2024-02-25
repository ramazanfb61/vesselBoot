<script setup></script>

<template>
  <header class="container border border-success border-5 bg-red text-white">
    <div class="text-center border border-white row">
      <div class="col d-block border border-white">tel</div>
      <div class="col d-none d-sm-block border border-white">e-mail</div>
      <div class="col d-none d-sm-block border border-white">teklif</div>
    </div>
    <nav class="bg-red text-white navbar navbar-expand-lg border border-white">
      <div class="container-fluid ">
        <router-link class="navbar-brand text-white" to="/">ARMA</router-link>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" style="color: white !important;"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active " aria-current="page" to="/"
                >Anasayfa</RouterLink
              >
              <!-- <a class="nav-link active" aria-current="page" to="/">Ev</a> -->
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/about"
                >Hakkında</RouterLink
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
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
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
  background-color: red;
}

a[class^="nav-link"]{
  color:white !important
}
</style>
