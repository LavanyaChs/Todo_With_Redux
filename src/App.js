import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';



const App = (props) => {
  let toDosList = useSelector((state) =>
    state.todos
  );

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({})


  const setChecked = (checked, todo) => {
    dispatch({
      type: 'UPDATE_IS_CHECK', checked: checked, todo

    })
  }
  const handleStatusGroupBn = (selectedBtn) => {
    dispatch({
      type: 'CHANGE_TODOS_IN_VIEW', selectedBtn
    })
  }
  const handleNameChange = (something) => {
    setTodo({ name: something.target.value, isActive: false });
  }
  const handleEdit = (index) => {
    console.log(index);
  }
  const determineInDisplayTodo = () => {
    let inView = toDosList.status.filter(x => x.isActive);
    inView = inView.length > 0 ? inView[0] : {};

    if (inView.name === 'All') {
      return [...toDosList.list]
    } else if (inView.name === 'Active') {
      return toDosList.list.filter(x => !x.isActive)

    } else {
      return toDosList.list.filter(x => x.isActive)
    }
  }
  const handleDelete = (x) => {
    dispatch({
      type: 'DELETE_TODO', todo: x

    })
  }
  const handleEditClick = (x) => {
    let newName = prompt("Enter New value");
    dispatch({
      type: 'EDIT_TODO', todo: x, newName: newName ? newName : x.name

    })
  }
  return (
    <div>
      <Container>

        <center>
          <h4> My Todos
          </h4></center>
        <Row>
          <Col xs={2}>  </Col>
          <Col xs={4}><Form.Group>
            <Form.Control size="lg" type="text" placeholder="What needs to be done?" value={todo.name}
              onChange={handleNameChange} />
            <br />
          </Form.Group>
          </Col>
          <Col xs={4}><Button variant="primary"
            onClick={() => {
              dispatch({ type: 'ADD_TODO', todo: { ...todo } })
              setTodo({ name: '', desc: '' })
            }
            }>
            Add</Button></Col>
          <Col xs={2}>  </Col>
        </Row>
        <Row>
          <Col xs={4}>
          </Col>
          <Col xs={6}>
            <ButtonGroup aria-label="todosStatus">
              {toDosList.status.map(x => {
                return (
                  <Button variant="secondary" onClick={(e) => {
                    handleStatusGroupBn(x)
                  }} value={x.name}>{x.name}</Button>
                )
              })}
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
        </Row>

        {determineInDisplayTodo().map((x, index) => {
          return (
            <Row><Col><ButtonGroup className="mb-2">
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="secondary"
                checked={x.isActive}
                value={x.name}
                onChange={(e) =>
                  // console.log(e)
                  setChecked(e.currentTarget.checked, x)
                }
              >
              </ToggleButton>
            </ButtonGroup>
              {x.name}
            </Col>
              <Col> <Button onClick={() => {
                handleEditClick(x)
              }} >Edit</Button></Col>
              <Col> <Button onClick={() => {
                handleDelete(x)
              }}>Delete</Button></Col>
            </Row>
          )

        })}

      </Container>

    </div >
  );
}



export default App;
