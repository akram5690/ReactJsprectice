import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addmovies = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        image: '',
        genre: '',
        stars: '',
        vote: '',
        language: '',
        duration: '',
        releaseDate: '',
        director: '',
        cast: ['', '', '', '', '', ''], // for 6 cast image URLs
        rating: '',
        trailer: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("cast")) {
            const index = parseInt(name.split("-")[1], 10);
            const updatedCast = [...formData.cast];
            updatedCast[index] = value;
            setFormData({ ...formData, cast: updatedCast });
        } else {
            setFormData({ ...formData, [name]: value });
        }
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
            text: '',
            image: '',
            genre: '',
            stars: '',
            vote: '',
            language: '',
            duration: '',
            releaseDate: '',
            director: '',
            cast: ['', '', '', '', '', ''], // for 6 cast image URLs
            rating: '',
            trailer: ''
        });
        navigate("/")
    };

    return (
        <>
        <div className="container mt-5 pt-4">
        <div className="card p-4 shadow-lg rounded-4 bg-light">
            <h2 className="text-center mb-4">🎬 Add New Movie</h2>
            <form onSubmit={handleSubmit} className="row g-4">

                {/* Movie Info Section */}
                <h5 className="text-primary fw-bold">🎞️ Movie Information</h5>
                <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Genre</label>
                    <input type="text" className="form-control" name="genre" value={formData.genre} onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="text" rows="2" value={formData.text} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Language</label>
                    <input type="text" className="form-control" name="language" value={formData.language} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Duration (in minutes)</label>
                    <input type="number" className="form-control" name="duration" value={formData.duration} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Release Date</label>
                    <input type="date" className="form-control" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Director</label>
                    <input type="text" className="form-control" name="director" value={formData.director} onChange={handleChange} required />
                </div>

                {/* Ratings & Votes */}
                <h5 className="text-primary fw-bold mt-4">⭐ Ratings</h5>
                <div className="col-md-6">
                    <label className="form-label">Rating (Stars)</label>
                    <input type="number" step="0.1" className="form-control" name="stars" value={formData.stars} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Vote Count</label>
                    <input type="number" className="form-control" name="vote" value={formData.vote} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Rating Certificate</label>
                    <input type="text" className="form-control" name="rating" value={formData.rating} onChange={handleChange} required />
                </div>

                {/* Media URLs */}
                <h5 className="text-primary fw-bold mt-4">🖼️ Media</h5>
                <div className="col-md-6">
                    <label className="form-label">Poster Image URL</label>
                    <input type="url" className="form-control" name="image" value={formData.image} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Trailer (YouTube Embed)</label>
                    <input type="url" className="form-control" name="trailer" value={formData.trailer} onChange={handleChange} required />
                </div>

                {/* Cast */}
                <h5 className="text-primary fw-bold mt-4">👥 Cast Images</h5>
                {formData.cast.map((url, i) => (
                    <div className="col-md-6" key={i}>
                        <label className="form-label">Cast Image {i + 1}</label>
                        <input
                            type="url"
                            className="form-control"
                            name={`cast-${i}`}
                            value={url}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}

                {/* Submit Button */}
                <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-primary btn-lg px-5">Add Movie</button>
                </div>
            </form>
        </div>
    </div>
    </>
    );
};

export default Addmovies;
