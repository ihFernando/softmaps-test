import React from 'react'

import Button from '.'

export default {
  title: 'Components/Button',
  component: Button
}

export const Default = () => (
  <>
    <Button modifier="primary">Botão Primary</Button>
    <Button modifier="secondary">Botão Dark</Button>
    <Button modifier="ghost">Botão Dark</Button>
  </>
)
