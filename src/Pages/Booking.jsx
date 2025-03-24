import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDoctor } from '../Services/api';
import BookingForm from '../Components/BookingForm';
import { FaArrowLeft, FaClock, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import Loader from '../components/Loader';

export default function Booking() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getDoctorDetails = async () => {
      try {
        const data = await fetchDoctor(doctorId);
        setDoctor(data);
      } catch (err) {
        setError('Failed to load doctor details');
      } finally {
        setLoading(false);
      }
    };

    getDoctorDetails();
  }, [doctorId]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!doctor) return <div className="text-center mt-8">Doctor not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
        >
          <FaArrowLeft className="mr-2" /> Back to Results
        </button>

        <div className="bg-white rounded-lg shadow-lg p-6 md:flex md:gap-8">
          {/* Doctor Details Section */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
            <p className="text-gray-600 mb-4">{doctor.specialty}</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>{doctor.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaClock className="mr-2" />
                <span>{doctor.experience} years experience</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMoneyBillWave className="mr-2" />
                <span>${doctor.fee}/consultation</span>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-6">Schedule Appointment</h3>
            <BookingForm 
              doctorId={doctorId}
              fee={doctor.fee}
              onSuccess={() => navigate('/dashboard')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}s