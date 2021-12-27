import AppLayout from '../components/Layouts/AppLayout'
import { TasksAll } from './TasksAll'
import { TasksSearch } from './TasksSearch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PATHS from '../pages/paths'

const Navigator = () => {
  return (
    <>
      <Router>
        <AppLayout>
          <Switch>
            <Route path={PATHS.TASKS_SCHEDULED}>Scheduled</Route>
            <Route path={PATHS.TASKS_SEARCH}>
              <TasksSearch />
            </Route>
            <Route path={PATHS.TASKS_ALL}>
              <TasksAll />
            </Route>
            <Route path={PATHS.CATEGORIES_ALL}>Categories All</Route>
          </Switch>

          {/* <Row>
          <Col cw={4}>
            <Input
              type="search"
              placeholder="Поиск"
              icon={<MdSearch />}
              size="sm"
            />
          </Col>
          <Col cw={4}>
            <Input type="transperent" size="lg" />
          </Col>
          <Col cw={4}>
            <Input type="transperent" size="sm" />
          </Col>
          <Col cw={4}>
            <Input type="search" placeholder="Поиск" icon={<MdSearch />} />
          </Col>
          <Col cw={4}>
            <Input type="search" placeholder="Поиск" icon={<MdSearch />} />
          </Col>
          <Col cw={4}>
            <Input type="search" placeholder="Поиск" icon={<MdSearch />} />
          </Col>
        </Row>
        <Input />
        <Button
          isHover
          icon={<MdAdd />}
          color="var(--dark-lighten-7)"
          size="lg"
        />
        <Button icon={<MdFlag />} color="var(--orange)" size="md" />
        <Button isHover icon={<MdClose />} color="var(--dark-lighten-6)" />
        <Button size="lg" color="var(--dark-lighten-5)">
          Показать
        </Button>
        <Divider />
        <Title variant="h1">New title</Title>
        <Text isElipsis variant="active">
          New text, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Iusto fuga nostrum dignissimos voluptas modi ullam ut? Temporibus
          earum accusamus voluptas dict`a minus beatae aliquam neque numquam
          laboriosam saepe vero id, nesciunt distinctio deserunt ullam
        </Text>
        <Text variant="disabled">
          New text, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Iusto fuga nostrum dignissimos voluptas modi ullam ut? Temporibus
          earum accusamus voluptas dicta minus beatae aliquam neque numquam
          laboriosam saepe vero id, nesciunt distinctio deserunt ullam
        </Text>
        <Row mb={24}>
          <Col cw={3}>
            <Checkbox />
            <Checkbox color="var(--orange)" />
          </Col>
        </Row> */}
        </AppLayout>
      </Router>
    </>
  )
}

export default Navigator
