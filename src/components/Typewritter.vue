<template>
  <div class="content">
    <span class="pre">{{ pre }}</span>
    <span class="typewritter">{{ h1 }}</span>
    <span class="cursor blink">|</span>
  </div>
</template>

<script>
import { PHRASES } from '../constants';

export default {
  name: 'Typewritter',
  data() {
    return {
      pre: 'I am ',
      h1: '',
      phrase: 0,
      letter: 1,
      goUp: true,
      interval: null,
    };
  },
  methods: {
    typewritter() {
      this.letter = this.goUp ? this.letter += 1 : this.letter -= 1;
      if (this.letter === (PHRASES[this.phrase].length + 15)) this.goUp = false;
      if (this.letter === 0) {
        this.goUp = true;
        if (this.phrase === PHRASES.length - 1) this.phrase = 0;
        else this.phrase += 1;
      }
      this.h1 = PHRASES[this.phrase].substring(0, this.letter);
    },
  },
  mounted() { this.interval = setInterval(() => this.typewritter(), 100); },
  destroyed() { clearInterval(this.interval); },
};
</script>

<style scoped>
.content {
  text-align: center;
  margin: 30vh auto;
}
.pre {
  display: inline-block;
  padding: 10px 12px;
  font-size: 6vh;
  font-weight: 900;
  text-align: center;
}
.typewritter {
  display: inline-block;
  padding: 10px 12px;
  font-size: 6vh;
  font-weight: 900;
  text-align: center;
}
.cursor {
  opacity: 1;
  font-size: 4em;
  font-weight: 200;
}
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
