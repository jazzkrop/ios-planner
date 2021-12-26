import { Layout } from '../Layout'
import SidebarLayout from './SidebarLayout'

const AppLayout = (props) => {
  const { children } = props
  return (
    <Layout background="var(--dark-lighten-1)" leftAside={<SidebarLayout />}>
      {children}
    </Layout>
  )
}
export default AppLayout
