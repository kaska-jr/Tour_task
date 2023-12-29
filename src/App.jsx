import Loading from "./Loading";
import { Tour } from "./Tour";
const url = "https://course-api.com/react-tours-project";
import { useEffect, useState } from "react";

const App = () => {
  const [tours, setTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTour(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTourRemove = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTour(newTour);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>no tours left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </main>
    );
  }

  return (
    <div className="w-full">
      <div className="w-[70%] mx-auto">
        <header className="w-[90%] mx-auto flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold w-40 text-center">
            <span>Our Tours</span>
          </h1>
          <div className="w-40 flex items-center justify-center">
            <p className="w-20 h-1 bg-green-600"></p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-8 items-start">
          {tours.map((tour) => {
            return (
              <div key={tour.id} className="shadow-xl p-3">
                <Tour {...tour} />
                <button
                  className="border border-green-700 px-4 py-2 w-full text-green-700 rounded-lg hover:text-white hover:bg-green-700"
                  onClick={() => {
                    handleTourRemove(tour.id);
                  }}
                >
                  Not Interested
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
