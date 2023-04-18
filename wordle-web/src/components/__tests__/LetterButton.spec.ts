import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LetterButton from '../LetterButton.vue'
import { Letter, LetterStatus } from '@/scripts/letter'

describe('LetterButton', () => {
    it('renders properly', () => {
        const letter = new Letter('a')
        const wrapper = mount(LetterButton, { props: { letter } })
        expect(wrapper.text()).toContain('a')
        expect(wrapper.attributes('color')).toBe('grey')
    })
    it('renders properly with passed params', () => {
        const letter = new Letter('a', LetterStatus.)
        const wrapper = mount(LetterButton, { props: { char: 'a', color: 'blue' } })
        expect(wrapper.text()).toContain('a')
        expect(wrapper.attributes('color')).toBe('blue')
    })
})
