import products  from '../data/Product.json'
import Card from 'react-bootstrap/Card'
function Productlist (){
    return(
        <div className='d-flex'>
            
                {products.map(p=>(
                    <Card style={{width:"40rem"}} className='m-2 p-4'>
                        <Card.Img src={p.src} style={{width:'autos', height:"15 rem"}}></Card.Img>
                        
                        <Card.Body>
                            <Card.Title style={{color:"blue"}}>{p.name}</Card.Title>
                            <Card.Text>{p.description}</Card.Text>
                        </Card.Body>
                        
                    </Card>
                ))
                }
        </div>
    )
}
export default Productlist;