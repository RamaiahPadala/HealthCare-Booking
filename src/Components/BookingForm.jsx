import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingForm({ doctorId }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add booking logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="w-full p-2 border rounded"
          minDate={new Date()}
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Select Time Slot:</label>
        <select 
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Choose time</option>
          <option value="09:00">09:00 AM</option>
          <option value="10:00">10:00 AM</option>
        </select>
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Confirm Appointment
      </button>
    </form>
  );
}