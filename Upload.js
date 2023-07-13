import { render } from "@testing-library/react";
import React, { useState } from "react";

// const Upload = () => {
//   const [imgstore, setImgStore] = useState();
//   const [img, setImg] = useState();

//   const input = (event) => {
//     // const file = event.target.files[0];
//     const file=event.target.file[0];
//     const render = new FileReader();
//         render.onloadend = () => {
//           setImgStore(render.result);
//         };

//         if (file) {
//           render.readAsDataURL(file);
//         }
//   };
//   const submit = (e) => {
//     e.preventDefault();

//     setImg((prev)=>{

//         return [...prev,imgstore];
//     })

//   };

//   return (
//     <>
//       <div className="main">
//         <div className="container">
//           <form onSubmit={submit}>
//             <input
//               type="file"
//               name="file"
//               placeholder="select file"
//               onChange={input}
//             />
//             <button type="submit" className="btn btn-primary">Submit</button>

//           </form>
//           <div className="list_img">
//             {/* <img src={img} alt="" /> */}

//             {
//                 img.map((val)=>{
//                     return(
//                         <>
//                         <img src={val} alt="error"></img>
//                         </>
//                     )
//                 })
//             }
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
const Upload = () => {
  const [imageDataList, setImageDataList] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const readerArray = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageData = reader.result;
        setImageDataList((prevList) => [...prevList, imageData]);
      };

      reader.readAsDataURL(files[i]); // or use readAsBinaryString if you need binary data
      readerArray.push(reader);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      {imageDataList.map((imageData, index) => (
        <img key={index} src={imageData} alt={`Uploaded ${index + 1}`} />
      ))}
    </div>
  );
};
export default Upload;
