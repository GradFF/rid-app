<script setup></script>
<template>
  <div class="max-w-screen-md mx-auto px-4 py-12">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold my-8">Solicitações</h1>
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost">
        Voltar
      </RouterLink>
    </div>

    <div class="alert alert-success shadow-lg mb-6">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          Sua solicitação foi recebida e aguarda o parecer da coordenação.
        </span>
      </div>
    </div>

    <form @submit.prevent="">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Curso</span>
          </label>
          <select class="select select-bordered" required>
            <option disabled selected>Selecione o curso</option>
            <option>Integral</option>
            <option>Noturno</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">DRE</span>
          </label>
          <input type="text" placeholder="DRE" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nome Completo</span>
          </label>
          <input
            type="text"
            placeholder="Nome completo"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>

        <fieldset
          class="py-4 px-2 mb-4 border border-base-300 rounded-md col-span-2"
        >
          <legend class="text-content text-sm font-semibold px-2">
            Qual(is) irregularidade(s) da CRID deseja regularizar?
          </legend>
          <div
            class="form-control mb-4"
            v-for="label in ['Falta requisito', 'Mais de 32']"
            :key="label"
          >
            <label class="label cursor-pointer">
              <div class="label-text font-medium">
                <span>{{ label }}</span>
                <small class="px-4 block"
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                  exercitationem voluptates repellendus necessitatibus. Hic
                  eius, quas mollitia impedit modi dolores? Et error dolores
                  odit quasi accusamus, nulla illo reprehenderit animi!</small
                >
              </div>
              <input type="checkbox" class="checkbox" :value="label" />
            </label>
          </div>
        </fieldset>

        <div class="form-control sm:col-span-2">
          <label class="label">
            <span class="label-text"
              >Justificativa (Cite especificamente cada disciplina com
              irregularidade e a respectiva justificativa para a solicitação):
            </span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full"
            placeholder="Jusquifique o parecer"
          ></textarea>
        </div>
        <div class="form-control sm:col-span-2">
          <label class="label cursor-pointer">
            <span class="label-text"
              >Atesto que li, entendi as instruções e estou ciente dos prazos
              para os procedimentos relativos a inscrição em disciplinas e sua
              eventual regularização:
            </span>
            <input type="checkbox" class="checkbox" />
          </label>
        </div>
        <div class="py-4 sm:col-span-2">
          <button
            type="submit"
            @click="handleSubmit"
            class="btn btn-primary px-6"
          >
            Salvar
          </button>
          <div class="alert alert-warning shadow-lg mt-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span
                >Sua solicitação já foi analisada pela coordenaçao. Não é
                possível alterar as informações.</span
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
