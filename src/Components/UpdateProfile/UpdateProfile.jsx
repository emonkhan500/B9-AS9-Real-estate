import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UpdateProfile = () => {
    const{user,updateUserProfile,setLoading}=useContext(AuthContext)
    useEffect(()=>{
        document.title='Update Profile'
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        console.log(photo,name)

        updateUserProfile(name,photo)
        .then(()=>{
           
        })
    }

    // const handleUpdate=()=>{
    //     updateUserProfile()
    // }
    return (
        <div>
            <div className="grid items-center mt-10 max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
	<div className="flex flex-col justify-between">
		<img  src={user?.photoURL ||'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} alt="" className="p-6 rounded-full  " />
		<div className="space-y-2">
			<h2 className="text-xl bg-fuchsia-400 pl-5 py-3 rounded-s-lg font-bold leading-tight lg:text-2xl"><span className="text-white mr-4">Name:</span>   {user.displayName || 'No Name'}</h2>
			
		</div>
	</div>
	<form onSubmit={handleSubmit} noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" name="name" type="text" placeholder="" className="w-full p-3 rounded bg-white" />
		</div>
		<div>
			<label htmlFor="" className="text-sm">Photo</label>
			<input id="" name="photo" type="" className="w-full p-3 rounded bg-white" />
		</div>
		
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50">Update</button>
	</form>
</div>
    
        </div>
    );
};

export default UpdateProfile;