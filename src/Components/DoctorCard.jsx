export default function DoctorCard({ doctor }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <img 
          src={doctor.photo} 
          alt={doctor.name} 
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">{doctor.name}</h3>
        <p className="text-gray-600 text-center mb-2">{doctor.specialty}</p>
        <div className="flex justify-between items-center">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            ★ {doctor.rating}
          </span>
          <Link 
            to={`/book/${doctor.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    );
  }