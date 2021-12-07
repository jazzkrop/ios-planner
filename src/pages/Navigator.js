import { Buttton } from '../components'
import {
  MdAddCircleOutline,
  MdAdd,
  MdFlag,
  MdClose,
  MdSearch
} from 'react-icons/md'
import AppLayout from '../components/Layouts/AppLayout'
import TasksAll from './TaskAll/TaskAll'
import Icon from '../components/Icon/Icon'
import { Input } from '../components/Input'

const Navigator = () => {
  return (
    <>
      <AppLayout>
        <Input placeholder="Поиск" iconLeft={<Icon component={MdSearch} />} />
        <Buttton
          iconLeft={
            <Icon component={MdAddCircleOutline} fontSize="var(--fz-title-2)" />
          }
          color="var(--dark-lighten-9)"
        >
          Новый список
        </Buttton>
        <Buttton
          iconLeft={<Icon component={MdAdd} fontSize="var(--fz-mega-1)" />}
          color="var(--dark-lighten-7)"
        />
        <Buttton iconLeft={<Icon component={MdFlag} />} color="var(--orange)" />
        <Buttton
          iconLeft={<Icon component={MdClose} />}
          color="var(--dark-lighten-6)"
        />
        <Buttton color="var(--dark-lighten-5)">Показать</Buttton>
      </AppLayout>
    </>
  )
}

export default Navigator
