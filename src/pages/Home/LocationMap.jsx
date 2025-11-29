import './LocationMap.css';

const LocationMap = () => {
  return (
    <div className="map-card">
      <iframe
        title="Fatcat Wealthy Location"
        src="https://www.google.com/maps?q=11.672889,78.141694&hl=en&z=14&output=embed"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;