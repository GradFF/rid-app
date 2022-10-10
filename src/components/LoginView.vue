<script setup></script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="text-3xl font-bold text-center">Farmácia UFRJ</h1>
          <p class="text-center my-4">
            Acesso exclusivo da Coordenação e Secretaria Acadêmica de graduação
          </p>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
            </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
