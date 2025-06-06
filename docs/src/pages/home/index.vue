<script setup lang="ts">
import { ExternalLink } from '@/components/common';
import { PageFooter } from '@/components/layout';
import HomeFeature from './components/HomeFeature.vue';
</script>

<template>
  <div>
    <div class="py-12 px-6 lg:py-20">
      <section class="mb-12 lg:mb-20">
        <div class="flex flex-col-reverse gap-3 mx-auto items-center lg:max-w-[1152px] lg:flex-row">
          <div class="main text-center lg:text-left lg:max-w-[592px]">
            <h1>
              <span class="name">Component Hook</span>
            </h1>

            <p class="text-4xl font-bold lg:text-5xl">Component library with Vue and React.</p>
            <p class="pt-3 text-text-secondary font-medium lg:text-2xl">
              A component library that includes a collection of common and useful components.
            </p>

            <div class="flex gap-2 pt-8 justify-center lg:justify-start">
              <img
                src="https://img.shields.io/github/v/release/tzuyi0817/component-hook?label=%20&color=409eff"
                alt="GitHub Release"
                width="50"
              />
              <external-link
                href="https://github.com/tzuyi0817/component-hook/blob/master/LICENSE"
                title="Component Hook License"
              >
                <img
                  src="https://img.shields.io/github/license/tzuyi0817/component-hook?color=409eff"
                  alt="License"
                  width="90"
                />
              </external-link>
            </div>
          </div>

          <div class="logo-container">
            <div class="logo-background"></div>
            <img
              src="/logo.png"
              alt="Logo"
              class="logo"
            />
          </div>
        </div>
      </section>

      <section
        class="max-w-[1200px] mx-auto flex flex-col gap-5 justify-center items-center lg:flex-row lg:items-stretch"
      >
        <home-feature
          title="Component"
          content="Use the code encapsulated by the front-end framework to help engineers develop quickly."
          image="component.png"
          :image-width="128"
          link="/component/vue-picker"
        />

        <home-feature
          title="CLI"
          content="Designed to help developers quickly build applications."
          image="cli.png"
          :image-width="114"
          link="/cli"
        />

        <home-feature
          title="ESLint"
          content="Reasonable defaults, best practices, and just a few lines of configuration."
          image="plugin.png"
          :image-width="220"
          link="/eslint"
        />
      </section>
    </div>

    <page-footer />
  </div>
</template>

<style lang="css" scoped>
.name {
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(120deg, var(--primary) 30%, var(--secondary));
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 192px;
  max-height: 192px;
}

.logo-container {
  width: 320px;
  height: 320px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-background {
  background-image: linear-gradient(-45deg, #5f99d3 50%, #80bfff 50%);
  position: absolute;
  width: calc(2 / 3 * 100%);
  height: calc(2 / 3 * 100%);
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(40px);
}

@media (min-width: 1024px) {
  .logo {
    max-width: 320px;
    max-height: 320px;
  }

  .logo-container {
    flex: 1 1 0%;
  }

  .logo-background {
    height: 100%;
    filter: blur(64px);
  }
}
</style>
