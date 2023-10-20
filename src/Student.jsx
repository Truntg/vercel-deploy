/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, removeStudent, addCourse, removeCourse } from './store/reducers/studentSlice'
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const Student = () => {
    const dispatch = useDispatch();
    const studentStudy = useSelector((state) => state.students.students);

    const {control, handleSubmit} = useForm({
      defaultValues: {
        name: "",
        subject: "",
        studying: true,
      },
    });
  
    const onSubmit = (value) =>{
      const payload = {...value, id: uuidv4()};
      dispatch(addStudent(payload))
    };

    const onDelete = (id) =>{
      dispatch(removeCourse(id));
    };
  
    return (
      <div>
        <h2>Students</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller name="name" control={control} 
          render={({field}) => (
            <input {...field} type='text' placeholder='Name'/>
          )}/>
          <Controller name="subject" control={control} 
          render={({field}) => (
            <input {...field} type='text' placeholder='Subject'/>
          )}/>

          <Controller name="studying" control={control} 
          render={({field}) => (
            <div>
              <label htmlFor=''>Studying</label>
              <input {...field} type='checkbox' checked={field.value} />
            </div>
          )}/>

          <button type='submit'>ADD</button>
        </form>
        <table
          style={{
            width:"100%",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Studying</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {studentStudy.contacts.map((students, index) => (
              <tr key={index}>
                <td>{students.id}</td>
                <td>{students.name}</td>
                <td>{students.subject}</td>
                <td>{students.studying.toString()}</td>
                <td>
                  <button onClick={() => onDelete(students.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Student