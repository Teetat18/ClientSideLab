import './style.css'
export default function Slide({ product }) {
    
    return (
        <><div className='slide'>
            <img src={product?.images[0]} alt={product?.description} />
        </div></>
    )
}