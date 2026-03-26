

export default function CoreConcepts({image, title, description}){
  console.log(image, title, description);
  return (
    <li>
      <img src={image} alt=''/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
