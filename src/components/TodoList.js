import React,{useCallback} from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {

    //react-virtualized로 최적화
    const rowRenderer = useCallback(
        ({index, key,style}) => {
            const todo = todos[index];
            return(
                <TodoListItem 
                    todo = {todo}
                    key = {key}
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                    style ={style}
                />
            );
        }, [onRemove, onToggle, todos]
    );
    return(
     <List 
        className="TodoList"
        width={512}
        height={513}
        rowCount={todos.length} //항목 개수
        rowHeight={57}
        rowRenderer={rowRenderer} //항목 렌더링 시 쓰는 함수
        list={todos} //배열
        style={{outline:'none'}} //List에 기본적으로 적용되는 outline 스타일 제거
     />

    );
}

export default React.memo(TodoList);