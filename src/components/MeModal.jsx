import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MeModal = ({ id, closeModal }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://firestore.googleapis.com/v1/projects/tl-2025-project/databases/(default)/documents/tl-2025-app/${id}`)
            setData(response.data);
            setLoading(false);
        }

        fetchData();
    }, [id]);

    useEffect(() => {
        const handleClickFromParent = (event) => {
            if (event.target.classList.contains('modal__box')) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickFromParent);

        return () => {
            document.removeEventListener('mousedown', handleClickFromParent);
        };
    }, [closeModal]);

    if (loading) {
        return (
            <div className='modal__box'> Loading...</div>
        )
    }

    return (
        <div className='modal__box'>
            {data ? (
                <div key={data.name} className='modal__df'>
                    <img className='modal__img' src={data.fields.img.stringValue} alt="" />
                </div>
            ) : (<figure>{`ID: ${id}`}</figure>)}
        </div>
    )
}

export default MeModal