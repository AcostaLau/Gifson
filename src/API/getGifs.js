
const apiKey = '1nt0v67QMGFyuSwK78jqqDQQg6ATbZpO'

export default function getGifs({buscarApi}){
    const API = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${buscarApi}&limit=12&offset=0&rating=g&lang=en`

        //actualizo gifs
        //accedo a la api
        return fetch(API)
            //paso a json el contenido de la API
            .then(res => res.json())
            .then(response => {
                //sasco data de response
                const {data} = response
                //realizo un map del array de objetos de la API
                const gif = data.map(image => {
                    const {id, title} = image
                    const { url } = image.images.original
                    return {id, title, url}
                }
                    
                    )
                return gif
            })
            .catch(rej => rej(console.log('404 error')))

}