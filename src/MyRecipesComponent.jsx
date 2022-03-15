export default function MyRecipesComponet({
  label,
  image,
  calories,
  ingredients,
}) {
  return (
    <>
      <h2> {label}</h2>
      <div className="container">
        <img className="tasty" src={image} alt="img" />
      </div>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="container">
        <p className="par">{calories.toFixed()} calories</p>
      </div>
    </>
  );
}
