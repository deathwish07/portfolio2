// import React, { useState } from 'react';
// import "./write.css";
// import toast from 'react-hot-toast';
// import { storage, db } from '../../firebase-config';
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";

// // import { setIsAuth } from '../../App';


// const Write = ({ setIsAuth }) => {

//     const [title, setTitle] = useState("");
//     const [text, setText] = useState("");
//     // const [image, setImage] = useState(null);

//     // const handleImageChange = (e) => {
//     //     setImage(e.target.files[0]);
//     // }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         localStorage.clear();
//         if (!title || !text) {
//             toast.error("Title and text is required");
//             return;
//         }

//         try {
//             // let imageUrl = '';
//             // if (image) {
//             //     const imageRef = ref(storage, `images/${image.name}`);
//             //     const snapshot = await uploadBytes(imageRef, image);
//             //     imageUrl = await getDownloadURL(snapshot.ref);
//             // }

//             await addDoc(collection(db, 'blogs'), {
//                 title,
//                 text,
//                 // imageUrl,
//                 createdAt: new Date()
//             });

//             toast.success('Post submitted successfully');
//             setTitle('');
//             setText('');
//             // setImage(null);
//             setIsAuth(false);

//         } catch (error) {
//             console.log('error submitting post: ', error);
//             toast.error("Failed to submit the blog post. Try again!");
//         }
//     };
//     // const signOut = (setIsAuth) => {
//     //     
//     // }


//     return (
//         <div className='write'>
//             <img
//                 className="writeImg"
//                 src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                 alt=""
//             />
//             <form className="writeForm" onSubmit={handleSubmit}>
//                 <div className="writeFormGroup">
//                     {/* <label htmlFor="fileInput">
//                         <i className="writeIcon uil uil-plus"></i>
//                     </label>
//                     <input id="fileInput" type="file"style={{ display: "none" }} /> */}
//                     <input
//                         className="writeInput"
//                         placeholder="Title"
//                         type="text"
//                         autoFocus={true}
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div className="writeFormGroup">
//                     <textarea
//                         className="writeInput writeText"
//                         placeholder="Tell your story..."
//                         type="text"
//                         autoFocus={true}
//                         value={text}
//                         onChange={(e) => setText(e.target.value)}
//                     />
//                 </div>
//                 <button className= "writeButton" type="submit">
//                     Publish
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Write