import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Detail = () => {
    const [dataTmdb, setDataTmdb] = useState([]);

    const getDetail = async () => {
        try {
            let response = await axios.get('https://api.themoviedb.org/3/movie/579974-rrr?api_key=fff60a2368eb2d7a2fe42a3f5300dcc4');
            setDataTmdb(response.data);

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDetail();
    }, []);

    console.log(dataTmdb);
    return (
        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with React Hooks</h5>
            <div className="card-body">
                <ul>
                    <li>{dataTmdb.title}</li>
                </ul>
            </div>
        </div>
    )
}

export default Detail