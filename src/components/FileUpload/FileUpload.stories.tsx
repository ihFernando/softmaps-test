import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import FileUpload from '.'

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  decorators: [withKnobs]
}

export const Default: React.FC = () => (
  <FileUpload
    placeholder="Ex: doc.jpeg ou doc.pdf, máx. 5Mb"
    acceptTypes=".jpeg, .jpg, .png, .pdf"
    limitSize={5}
    capture="environment"
    onFileUploaded={e => console.log(e)}
  />
)
