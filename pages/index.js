
import { sanityClient, urlFor } from '../sanity'

const Home = ({ properties }) => {

  console.log(properties[0].mainImage)

  return (
    <>
    {properties && (
      <div className='main'><div className='feed-container'>
        <h1>Places to stay near you</h1>
      <div className='feed'>

        {properties.map((property, index) => (
          <div className='card' key={property._id}>
            <img src={urlFor(property.mainImage)} />
          </div>
        ))}
        </div>
       </div> 
      </div>
    )}
    </>
   
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]'
  const properties = await sanityClient.fetch(query)
  
  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    }
  } else {
    return {
      props: {
        properties
      }
    }
  }
}

export default Home