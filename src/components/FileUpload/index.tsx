import React, { memo, useCallback, useState, useRef } from 'react'

import { IFileUpload } from './models'

import { Wrap, Image, SelectFile } from './styled'
import Typography from '../Typography'

declare const If: React.FunctionComponent<{ condition: any }>

const FileUpload = ({
  acceptTypes,
  limitSize,
  capture,
  onFileUploaded
}: IFileUpload) => {
  const [selectedFile, setSelectedFile] = useState('')
  const inputFileRef = useRef(null)

  const onChooseFile = useCallback((file: File) => {
    const { size } = file
    const sizeInMb = parseInt((size / (1024 * 1024)).toFixed(0))

    if (sizeInMb < limitSize) {
      onFileUploaded(file)
      setSelectedFile(URL.createObjectURL(file))
    } else {
      // Adicionar validações
    }
  }, [])

  const handleFocusInputFile = useCallback(
    () => inputFileRef && inputFileRef?.current?.click(),
    []
  )

  return (
    <>
      <Wrap>
        <If condition={selectedFile}>
          <Image src={selectedFile} />
        </If>
        <SelectFile type="button" onClick={() => handleFocusInputFile()}>
          <Typography color="dark-medium" isBold>
            <img src="https://coolicons.cool/icons/file/cloud_up.svg" />
          </Typography>
        </SelectFile>
      </Wrap>
      <input
        ref={inputFileRef}
        type="file"
        accept={acceptTypes || '*'}
        name="files"
        capture={capture}
        onChange={e => onChooseFile(e.currentTarget.files[0])}
        hidden
      />
    </>
  )
}

const MemoizedFileUpload = memo(FileUpload)

MemoizedFileUpload.displayName = 'FileUpload'

export default MemoizedFileUpload
