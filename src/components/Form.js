import React, {useState} from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    const [form,setForm] = useState({
        task: '',
        done:false
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.task.length > 0) {
            props.task(form);
        }

        setForm({
            task:'',
            done:false
        })
    }

    const handleChange = (e) => {
        setForm({
            task: e.target.value,
            done:false
        })
    }

    return (
        <div className={styles.formGroup}>
            <form onSubmit={handleSubmit}>
                <input className={styles.formInput} type="text" name="task" value={form.task} onChange={handleChange}/>
                <input className={styles.button} type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Form;