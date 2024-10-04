import { createContext, useState } from "react";

export const YoutubeContexs = createContext(null)

function Screen({children}){
    const [youTubeVideo,setYouTubeVideo] = useState('')
    return(
        <YoutubeContexs.Provider value={{youTubeVideo,setYouTubeVideo}}>
            {children}
        </YoutubeContexs.Provider>
    )
}
export default Screen

