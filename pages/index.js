
import { sanityClient, urlFor } from '../sanity'
import Link from 'next/link'
import { isMultiple } from '../utils'
import DashboardMap from '../components/DashboardMap'

const Home = ({ properties }) => {

  console.log(properties[0].mainImage)

  return (
    <>
    {properties && (
      <div className='main'><div className='feed-container'>
        <h1>Places to stay near you</h1>
      <div className='feed'>

        {properties.map((property) => (
          <Link href={`property/${property.slug.current}`}><div className='card' key={property._id}>
            <img src={urlFor(property.mainImage)} />
            <p>{property.review.length} review{isMultiple(property.review.length)}</p>
            <h3>{property.title}</h3>
            <h3>{property.pricePerNight}/Per night</h3>
          </div></Link>
        ))}
        </div>
     
       </div> 
       <div className='map'>
          <DashboardMap properties={properties}/>
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