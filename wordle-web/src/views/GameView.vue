<template>
  <v-card color="grey-darken-4" width="35em">
    <v-card-title> Wordlinator </v-card-title>
    <v-card-subtitle>This is a game about words</v-card-subtitle>
    <v-card-text>
      <v-text-field
        v-model="guess"
        label="Guess"
        variant="solo"
        @keyup.enter="checkGuess"
      ></v-text-field>
      <v-card>
        <v-card-text>
          <h3>Current Guess: {{ guess }}</h3>
          <h3>Secret Word: {{ game.secretWord }}</h3>
        </v-card-text>
        <v-card-text>
          <v-row v-for="word in game.guesses" :key="word.text">
            <v-col v-for="letter in word.letters" :key="letter.char">
              <v-btn :color="letter.color">
                {{ letter.char }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="outlined" to="/" color="arabicaMint">Return to Home</v-btn>
      <v-spacer />
      <v-btn color="primary" @click="checkGuess">Check</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { WordleGame } from '@/scripts/wordleGame'
const guess = ref('')
const game = reactive(new WordleGame())
console.log(game.secretWord)

function checkGuess() {
  game.submitGuess(guess.value)
}
</script>
