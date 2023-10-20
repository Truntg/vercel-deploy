// import { Controller, useForm } from 'react-hook-form';
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { router} from './router';
import { RouterProvider } from 'react-router-dom';
// const siche = yup.object().shape({
//   recipient: yup.string().required("không được để người nhận trống"),
//   subject: yup.string().required("không được để chủ đề trống"),
//   content: yup.string().required("không được để nội dung trống"),
//   file: yup.mixed().test("validate-file", "File format is invalid", function (value) {
//     return ["image/jpeg", "image/png"].includes(value.type);
//   }),
// })
function App() {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
  // const {control, handleSubmit, formState:{error}} = useForm({
  //   defaultValues: {
  //     recipient: "",
  //     subject: "",
  //     content: "",
  //     file:"",
  //   },
  //   resolver: yupResolver(siche),
  // });

  // const onSubmitCallBack = (values) => {
  //  console.log(88,values); 
  // };


  // return (
  //   <form onSubmit={handleSubmit(onSubmitCallBack)}>
  //     <div>
  //       <label>Người Nhận:</label>
  //       <Controller name="recipient" control={control} render={({ field }) => (
  //           <div>
  //             <input {...field} type="text" placeholder="Người nhận" />
  //           </div>
  //         )}/>

  //       <label>Chủ đề:</label>
  //       <Controller name="subject" control={control} render={({ field }) => (
  //           <div>
  //             <input {...field} type="text" placeholder="Chủ đề" />
  //           </div>
  //         )}/>
        
  //       <label>Nội Dung:</label>
  //       <Controller name="content" control={control} render={({ field }) => (
  //           <div>
  //             <input {...field} type="text" placeholder="Nội Dung" />
  //           </div>
  //         )}/>
        
  //       <label>Tập Tin:</label>
  //       <Controller name="file" control={control} render={({ field }) => (
  //           <div>
  //             <input {...field} type="file" value={field.value?.fileName}
  //               placeholder="Upload attachment"
  //               onChange={(event) => {
  //                 field.onChange(event.target.files[0]);
  //               }} />
  //               <div>{error?.file?.message}</div>
  //           </div>
  //         )}/>
  //       <button type='submit'>Submit</button>
  //     </div>
  //   </form>
  // );
}

export default App
