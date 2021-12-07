
import LayoutStyle from './Layout.style'

const Layout = (props) => {
  return (
    <LayoutStyle {...props}>
      {props.children}
    </LayoutStyle>
  )
}
export default Layout
