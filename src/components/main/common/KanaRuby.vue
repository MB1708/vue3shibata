<template>
  <span v-once>
    <span
      v-for='(kana, i) in kanas'
      :key='i'
    >
      <ruby v-if='kana[1]'>
        {{kana[0]}}
        <rt>
          {{kana[1]}}
        </rt>
      </ruby>
      <span v-else>
        {{kana[0]}}
      </span>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'KanaRuby',
    props: {
      kanas: Array
    },
  }
</script>
