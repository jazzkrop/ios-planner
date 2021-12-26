import React from 'react'
import { TitleStyled } from './Title.style'

const Title = (props) => {
  const { variant, children, color, thin, isElipsis, ...rest } = props

  return (
    <TitleStyled
      as={variant}
      className={variant}
      color={color}
      thin={thin}
      isElipsis={isElipsis}
      {...rest}
    >
      {children}
    </TitleStyled>
  )
}

export default Title
