import { Task } from '../Task'
import styles from './tasks.module.css'
import clipboard from '../../assets/Clipboard.svg'


export function Tasks({ tasks, onDelete, onComplete }) {
    const taskQuantity = tasks.length
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className={styles.tasks}> 
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluidas </p>
                    <span>{completedTasks} de {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task
                        onComplete={onComplete}
                        onDelete={onDelete}
                        key={task.id} 
                        task={task}
                    />
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <img src={clipboard}/>
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}