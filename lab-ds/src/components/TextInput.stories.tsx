import { Meta, StoryObj } from '@storybook/react'

import { Envelope } from 'phosphor-react'

import { TextInput, TextInputRootsProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children:[
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>,
                <TextInput.Input placeholder='Type your E-mail adress' />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootsProps>

export const Default: StoryObj<TextInputRootsProps> = {}

export const WithoutIcon: StoryObj<TextInputRootsProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your E-mail adress' />
    }           
}
