import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addmovies = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        image: '',
        stars: '',
        vote: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:8000/moviedata', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.error("Error adding movie:", error);
            alert("Something went wrong.");
        }
        setFormData({
            title: '',
            genre: '',
            image: '',
            stars: '',
            vote: ''
        });
        navigate("/")
    };

    return (
        <div className="container mt-5 pt-4">
            <div className="card p-4 shadow-lg rounded-4 bg-light">
                <h2 className="text-center mb-4">🎬 Add New Movie</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title:</label>
                        <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Genre:</label>
                        <input type="text" className="form-control" name="genre" value={formData.genre} onChange={handleChange} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image URL:</label>
                        <input type="text" className="form-control" name="image" value={formData.image} onChange={handleChange} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Stars:</label>
                        <input type="number" step="0.1" className="form-control" name="stars" value={formData.stars} onChange={handleChange} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Votes:</label>
                        <input type="number" className="form-control" name="vote" value={formData.vote} onChange={handleChange} required/>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-4">Add Movie</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addmovies;
