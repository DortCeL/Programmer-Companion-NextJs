"use client";

import React, { useState } from "react";
import { addTodoToFirebase } from "@/utils/dbFuncions";

const AddProjectComponent = () => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const added = await addTodoToFirebase(title, description);
		if (added) {
			alert("Added post successfully");
		} else alert("Could not add");
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-4 justify-start items-center border-dotted drop-shadow-lg  w-fit px-10 py-4 mx-auto my-8'
		>
			<label htmlFor='title' className='font-bold text-slate-600'>
				Title
			</label>
			<input
				type='text'
				name='title'
				placeholder='Enter title ... '
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				className='outline-none px-4 py-2 text-slate-600 border-dotted border-2 border-slate-600 rounded-full'
			/>

			<label htmlFor='title' className='font-bold text-slate-600'>
				Description
			</label>
			<textarea
				name='description'
				placeholder='Enter description ... '
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
				className='outline-none px-4 py-2 text-slate-600 border-dotted border-2 border-slate-600 rounded'
			/>

			<button
				type='submit'
				className='px-8 py-2 bg-black text-white mx-auto block hover:bg-slate-700 
        rounded-full'
			>
				Create Post
			</button>
		</form>
	);
};

export default AddProjectComponent;
