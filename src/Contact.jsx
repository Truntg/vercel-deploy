/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeSlice, addFavorite, fetchPosts } from './store/reducers/slice';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export const Contact = () => {
    const dispatch = useDispatch();
    const phonebookStore = useSelector((state) => state.contacts);

    const {control, handleSubmit} = useForm({
      defaultValues: {
        name: "",
        phone: 0,
        isFavorite: true,
      },
    });
    

    const onSubmit = (value) =>{
      const payload = {...value, id: uuidv4()};
      dispatch(addContact(payload))
    };

    const onDelete = (id) =>{
      dispatch(removeSlice(id));
    };

    useEffect(() => {
      dispatch(fetchPosts("121102"));
    }, []);
  
    return (
      <div>
        <h2>PhoneBook</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller name="name" control={control} 
          render={({field}) => (
            <input {...field} type='text' placeholder='Name'/>
          )}/>
          <Controller name="phone" control={control} 
          render={({field}) => (
            <input {...field} type='text' placeholder='Phone'/>
          )}/>

          <Controller name="isFavorite" control={control} 
          render={({field}) => (
            <div>
              <label htmlFor=''>Favorite</label>
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
              <th>Phone</th>
              <th>Favorite</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {phonebookStore.contacts.map((slice, index) => (
              <tr key={index}>
                <td>{slice.id}</td>
                <td>{slice.name}</td>
                <td>{slice.phone}</td>
                <td>{slice.isFavorite.toString()}</td>
                <td>
                  <button onClick={() => onDelete(slice.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Contact