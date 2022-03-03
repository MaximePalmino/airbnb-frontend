import { urlFor } from "../sanity"

const Image = ({identifier, image}) => {
    console.log(urlFor)

    return (

        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image).auto('format')} />
        </div>
    )
}

export default Image