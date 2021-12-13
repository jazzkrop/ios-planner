import ContainerStyled from './Container.styled'

const Container = (props) => {
  return <ContainerStyled size={props?.size}>{props.children}</ContainerStyled>
}

export default Container
