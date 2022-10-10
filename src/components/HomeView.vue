<script setup>
import Navbar from './shared/Navbar.vue'
</script>
<template>
  <div class="min-h-screen bg-base-200">
    <Navbar />
    <div class="hero mt-12">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-2xl font-bold mb-8">
            Regularização de inscrição em disciplina 2022-2
          </h1>

          <RouterLink :to="{ name: 'create' }" class="btn btn-primary mb-4">
            Solicitar Regularização
          </RouterLink>
          <div class="divider">OU</div>

          <p>
            Infome no campo abaixo o código de acesso que recebeu quando
            preencheu o requerimento.
          </p>
          <form @submit.prevent="handleSubmit">
            <div class="form-control mt-4">
              <div class="flex items-center space-x-2">
                <input
                  type="search"
                  placeholder="Informe o código"
                  class="input input-bordered w-full"
                />
                <button type="submit" class="btn btn-primary btn-outline">
                  Pesquisar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
