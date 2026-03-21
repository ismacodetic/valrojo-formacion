export default function Map() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.8766915250926!2d-6.222854923538103!3d41.94959396093441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3991cb356e9925%3A0xff1e1928a32e41be!2sC.%20Villardeciervos%20Villanue%2C%2056%2C%2049337%20Villanueva%20de%20Valrojo%2C%20Zamora!5e1!3m2!1ses!2ses!4v1774115835127!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}