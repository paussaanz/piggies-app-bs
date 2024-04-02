import React, { useState } from 'react';
import { debounce } from 'lodash'; 
import { fetchGifs } from "../services/GifService";
import AlertDialog from './AlertDialog';
import FormControl from './Form/FormControl';
import FormInput from './Form/FormInput';

function GifSearch({ setShowGifSearchBar, onGifSelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [gifs, setGifs] = useState([]);

    const manageFetchGifs = debounce (async () => {
        try {
            const response = await fetchGifs(searchTerm);
            if (response.data) {
                setGifs(response.data.data);
                console.log(response)
            } else {
                console.error('No data received');
                setGifs([]);
            }
        } catch (error) {
            console.error('Error fetching gifs:', error);
            setGifs([]);
        }
    }, 500);




    return (
        <div>
            <AlertDialog
                bg_color="cream"
                text_color="black"
                body_weight="semi-bold"
                title="SEARCH FOR A GIF"
                body={
                    <>
                        <form >
                            <FormControl
                                text="Gif"
                                htmlFor="gif"
                            >
                                <FormInput
                                    id="gif"
                                    name="gif"
                                    type="text"
                                    placeholder="ENTER A WORD"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    value={searchTerm}
                                />
                            </FormControl>
                        </form>
                        <div>
                            {gifs.map(gif => (
                                <img
                                    className="p-1 "
                                    key={gif.id}
                                    src={gif.images.fixed_width.url}
                                    alt={gif.slug}
                                    onClick={() => onGifSelect(gif)}
                                />
                            ))}
                        </div>
                    </>
                }
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        setShowGifSearchBar(false);
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "SEARCH",
                    onClick: () => { manageFetchGifs() },
                    type: "submit"
                }} />


        </div>
    );
}




export default GifSearch;
