import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
import { stateChanged } from "../reducers/taskReducer";
import undone from "./Images/loading.png";
import done from "./Images/tick (1).png";
import { setNotification } from "../reducers/notificationReducer";


const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((element) => element.Tasks);

  const onClick = (task) => {
    dispatch(stateChanged(task));
    dispatch(setNotification(`Task "${task.text}" is ${task.state===true ? "undone" : "done :)"}`))
  };

  return (
    <Container>
      <ListGroup variant="flush">
        {tasks.map((t) => (
          <ListGroup.Item action onClick={() => onClick(t)} key={t.id}>
            {t.state ? (
              <img
                src={done}
                width="20"
                height="20"
                alt=""
                style={{ marginRight: 30 }}
              ></img>
            ) : (
              <img
                src={undone}
                width="20"
                height="20"
                alt=""
                style={{ marginRight: 30 }}
              ></img>
            )}
            {t.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Tasks;
