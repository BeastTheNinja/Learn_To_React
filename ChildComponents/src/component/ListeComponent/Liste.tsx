export const FavoritesList = () => {
  const favoriteFoods = ["Pizza", "Sushi", "Burger", "Pasta", "Is"];
  const favoriteMovies = ["Pokemon", "The 100", "Interstellar", "Star Wars", "Dragon Ball"];

  return (
    <div className="mt-6 w-full max-w-md bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Mine livretter</h2>
        <ul className="list-disc list-inside text-gray-700">
          {favoriteFoods.map((food, index) => (
            <li key={index} className="hover:text-blue-500 transition-colors">{food}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Mine favorit film</h2>
        <ul className="list-disc list-inside text-gray-700">
          {favoriteMovies.map((movie, index) => (
            <li key={index} className="hover:text-blue-500 transition-colors">{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
