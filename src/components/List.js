import React from 'react';
import styles from './List.module.css';

const List = (props) => {
    return (
        <div className={styles.listGroup}>
            {props.list.map( (item,i) =>
            <div key={i} className={styles.listItem}>
                <form className={styles.listItemCheck}>
                    <input type="checkbox" checked={props.list.done} onChange={(e) => props.done({pos:i,item:{task:item.task,done:e.target.checked}})}/>
                </form>
                <div className={styles.listItemContent} style={{textDecoration: item.done===true && ('line-through')}}>{item.task}</div>
                <button className={styles.listItemRemove} onClick={() => props.remove(i)}>Delete</button>
            </div>
            )}
        </div>
    )
}

export default List;