export function MapEmbed() {
  return (
    <div className="h-48 w-full overflow-hidden rounded-lg bg-slate-800 sm:h-56 md:h-64">
      <iframe
        title="Localisation Jardins Moulron"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2070000000003!2d4.4042!3d50.8503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUxJzAxLjEiTiA0wrAyNCcxNS4xIkU!5e0!3m2!1sfr!2sbe!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
    </div>
  );
}
