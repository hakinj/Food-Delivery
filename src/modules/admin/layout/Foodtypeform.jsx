import React, { useReducer } from 'react'
import { foodTypeReducer } from '../../auth/utils'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { LoadingComponent } from '../../auth/utils';



function Foodtypeform() {
    const [state, dispatch] = useReducer(foodTypeReducer, { name: '', description: '', image: '', price: '', category: '', ingredients: '', rating: '' })
    console.log(state)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData;
        formData.append('name', state.name);
        formData.append('description', state.description);
        formData.append('image', state.image);
        formData.append('price', state.price);
        formData.append('category', state.category);
        formData.append('ingredients', state.ingredients);
        formData.append('rating', state.rating);
        try {
            const result = await axios.post("http://localhost:3200/api/v3/post-food",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                }

            );
            <LoadingComponent />
            const data = await result.data

            if (data.success) {
                navigate('/foodtypeuploaded')
            }

            console.log(data)
        }
        catch (error) {
            console.log(error)
        }


    }

    return (
        <>
        <div className=' pl-10 h-auto flex ' >
            <form onSubmit={handleSubmit}>
                <div className="mb-3 w-96 ">
                    <input type="text" className="form-control" id="name" name='name' placeholder="food name"
                        onChange={(e) => dispatch({ type: 'NAME', payload: e.target.value })} />
                </div>
                <div className="mb-3 w-96">
                    <textarea type="text" className="form-control" id="description" name='description' placeholder="description"
                        onChange={(e) => dispatch({ type: 'DESCRIPTION', payload: e.target.value })} ></textarea>
                </div>
                <div className="mb-3 w-96">
                    <input className="form-control" type="file" id="image" name='image'
                        onChange={(e) => dispatch({ type: 'IMAGE', payload: e.target.files[0] })} />
                </div>
                <div className="mb-3 w-96">
                    <input type="number" className="form-control" id="price" placeholder="price"
                        onChange={(e) => dispatch({ type: 'PRICE', payload: e.target.value })} />
                </div>
                <div className="mb-3 w-96">
                    <input type="text" className="form-control" id="category" placeholder="category"
                        onChange={(e) => dispatch({ type: 'CATEGORY', payload: e.target.value })} />
                </div>
                <div className="mb-3 w-96">
                    <textarea type="text" className="form-control" id="ingredients" placeholder="ingredients"
                        onChange={(e) => dispatch({ type: 'INGREDIENTS', payload: e.target.value })} ></textarea>
                </div>
                <div className="mb-3 w-96">
                    <input type="text" className="form-control" id="rating" placeholder="rating"
                        onChange={(e) => dispatch({ type: 'RATING', payload: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary mb-20 w-96 ">Login</button>
            </form >
            <div className=' border-solid border-gray-950 pl-14 '>  
                <h3>Admin fill in all the required field to upload the list of food available for sales to the customers... </h3>
            </div>

            </div>

        </>

    )
}

export default Foodtypeform