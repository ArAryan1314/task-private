import styles from "./addtask.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormModal = ({ setTask, tasks, setIsFormOpen }) => {
  const schema = yup.object().shape({
    text: yup.string().required(),
    icon: yup.string(),
    start: yup.string(),
    end: yup.string(),
    extra: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (newData) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...newData };
    setTask([...tasks, newTask]);
    setIsFormOpen(false);
  };

  return (
    <div className={styles.form_model}>
      <div className={styles.modal_content}>
        <form className={styles.form_field} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.task_field}>
            <div className={styles.task_entery}>
              <label>Enter Task</label>
              <input
                type="text"
                placeholder="Enter Task Name"
                {...register("text")}
              />{" "}
              {errors.text?.message}
            </div>
            <div className={styles.task_entery}>
              <label>Enter emoji</label>
              <input type="text" placeholder="Emoji" {...register("icon")} />
            </div>
          </div>
          <div className={styles.task_field}>
            <div className={styles.task_entery}>
              <label>Enter start Time</label>
              <input type="time" {...register("start")} />
            </div>
            <div className={styles.task_entery}>
              <label>Enter end Time</label>
              <input type="time" {...register("end")} />
            </div>
          </div>
          <div className={styles.task_entery}>
            <label>Enter purpose</label>
            <input type="text" placeholder="purpose" {...register("extra")} />
          </div>
          <button type="submit" className={styles.btn_form}>
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
