
const apiKey = '1nt0v67QMGFyuSwK78jqqDQQg6ATbZpO'

export default function getTrendingGifs(){
    const API = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5&rating=g`

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