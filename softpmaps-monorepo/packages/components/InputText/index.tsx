import React from 'react'

import Typography from '@softmaps/components/Typography'

import { IInputText } from './models'

import { Input as StyledInput, Error } from './styled'

const InputText = ({
  fieldName,
  placeholder,
  isError,
  errorMessage,
  isRequired,
  ...props
}: IInputText) => {
  return (
    <>
      <StyledInput
        type="text"
        name={fieldName}
        placeholder={placeholder}
        isError={isError}
        required={isRequired}
        {...props}
      />
      <If condition={isError}>
        <Error>
          <Typography size="body-p" color="warning">
            {errorMessage}
          </Typography>
        </Error>
      </If>
    </>
  )
}

InputText.displayName = 'InputText'

InputText.defaultProps = {
  isError: false,
  errorMessage: 'Verifique os dados do campo.',
  isRequired: false
}

export default InputText
