import React from 'react'
import { TitleStyled } from './Title.style'

const Title = (props) => {
  const { variant, children, color, thin } = props

  return (
    <TitleStyled
      as={variant}
      className={variant}
      color={color}
      thin={thin}
    >
      {children}
    </TitleStyled>
  )
}

export default Title
