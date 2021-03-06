import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState('');

    const searchFilm = async () => {
        try {
            const response = await API.searchFilmsByTitle(searchName)
            console.log(response)
            if (response.data.Response === 'True') {
                setSearchResult(JSON.stringify(response.data.Search))
            } else {
                setSearchResult(response.data.Error)
            }
        } catch (error) {
            console.log('ошибка отправки запроса', error)
        }

    };

    const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        try {
            const response = await API.searchFilmsByType(searchNameByType, type)
            setSearchResultByType(JSON.stringify(response))
        } catch (Error) {
            console.log('ошибка отправки запроса', Error)
        }
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {searchResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;