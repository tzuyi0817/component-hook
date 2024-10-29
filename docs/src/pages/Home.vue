<script setup lang="ts">
import ExternalLink from '@/components/ExternalLink.vue';
import HomeFeature from '@/components/home/HomeFeature.vue';
import FooterContainer from '@/components/layout/Footer.vue';
</script>

<template>
  <div>
    <div class="py-12 lg:py-20">
      <section class="flex flex-col gap-3 justify-center items-center text-center mb-12 px-4 lg:mb-14">
        <h1>Component Hook</h1>
        <p>A component library that includes a collection of common and useful components</p>

        <div class="flex gap-2 mt-2">
          <img
            src="https://img.shields.io/github/v/release/tzuyi0817/component-hook?label=%20&color=409eff"
            alt="GitHub Release"
            width="50"
          />
          <external-link href="https://github.com/tzuyi0817/component-hook/blob/master/LICENSE">
            <img
              src="https://img.shields.io/github/license/tzuyi0817/component-hook?color=409eff"
              alt="License"
              width="90"
            />
          </external-link>
        </div>
      </section>

      <section class="flex flex-col gap-10 justify-center lg:flex-row">
        <home-feature
          title="Component"
          content="Designed to help developers quickly build applications."
          image="component.png"
          :image-width="128"
          link="/component/picker"
        />

        <home-feature
          title="ESLint Plugin"
          content="Reasonable defaults, best practices, and just a few lines of configuration."
          image="plugin.png"
          :image-width="220"
          link="/eslint"
        />
      </section>
    </div>

    <footer-container />
  </div>
</template>
