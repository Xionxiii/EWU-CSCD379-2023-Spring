<template>
  <v-card color="grey-darken-4" width="30em">
    <v-card-title> Wordlinator </v-card-title>
    <v-card-subtitle>This is a game about words</v-card-subtitle>
    <v-card-text>
        <v-text-field v-model="guess" label="Guess" variant="solo"></v-text-field>
        <v-card>
            <v-card-text>
                <h3>Current Guess: {{guess}}</h3>
                <h3>Secret Word: {{ secretWord }}</h3>
            </v-card-text>
            <v-card-text>
                <v-row v-for="word in guesses">
                    <v-col v-for="letter in word" :key="letter.letter">
                        <v-card :color="letter.color">
                            <v-card-title>{{ letter.letter }}</v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    </v-card-text>
    <v-card-actions>
      <nav>
        <v-btn variant="outlined" to="/" color="arabicaMint">Return to Home</v-btn>
      </nav>
      <v-spacer />
      <v-btn color="primary" @click="checkGuess">Check</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Letter, LetterStatus } from '@/scripts/letter'

const guess = ref('')
const wordList = ['apple', 'peach', 'crypt', 'zesty', 'color', 'piano']
const secretWord = wordList[Math.floor(Math.random() * wordList.length)]
const guesses = reactive(new Array<Array<Letter>>())
console.log(secretWord)

function checkGuess() {
  console.log(guess.value)
  // check length of guess
  if (guess.value.length !== secretWord.length) {
    console.log('wrong length')
    guess.value = ''
    return
  }

  //check if letters are valid
  const results = new Array<Letter>()
  let guessChars = guess.value.split('')
  let secretChars = secretWord.split('')
  let isCorrect = true
  for (let i = 0; i < 5; i++) {
    results.push(new Letter(guess.value[i]))
    if (guess.value[i] == secretWord[i]) {
      results[i].status = LetterStatus.Correct
      guessChars[i] = '_'
      secretChars[i] = '_'
      console.log(`Letter ${i} is correct`)
    } else {
      isCorrect = false
      results[i].status = LetterStatus.Wrong
      console.log(`Letter ${i} is incorrect`)
    }
  }

  for (let i = 0; i < 5; i++) {
    if (guessChars[i] !== '_') {
      for (let j = 0; j < 5; j++) {
        if (secretChars[j] === guessChars[i]) {
          results[i].status = LetterStatus.Misplaced
          guessChars[i] = '_'
          secretChars[j] = '_'
          console.log(`Letter ${i} is misplaced`)
          break
        }
      }
    }
  }

  console.log(guessChars)
  console.log(secretChars)
  console.log(results)
  console.log(isCorrect)
  guesses.push(results)
  console.log(guesses)
  //check if the letters are in the right place
}
</script>
