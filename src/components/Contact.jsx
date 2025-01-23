import React from 'react';

const ContactSection = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Formulario enviado con éxito!');
    };
  
    return (
      <div className='bod'>
        <section className="contact-section">
          <h2 className="contact-section__title">Contacto</h2>
          <form className="contact-section__form" onSubmit={handleSubmit}>
            <label className="contact-section__label" htmlFor="name">
              Nombre:
            </label>
            <input
              className="contact-section__input"
              type="text"
              id="name"
              name="name"
              required
            />
  
            <label className="contact-section__label" htmlFor="email">
              Correo Electrónico:
            </label>
            <input
              className="contact-section__input"
              type="email"
              id="email"
              name="email"
              required
            />
  
            <label className="contact-section__label" htmlFor="subject">
              Asunto:
            </label>
            <input
              className="contact-section__input"
              type="text"
              id="subject"
              name="subject"
              required
            />
  
            <label className="contact-section__label" htmlFor="message">
              Mensaje:
            </label>
            <textarea
              className="contact-section__textarea"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
  
            <button className="contact-section__button" type="submit">
              Enviar
            </button>
          </form>
        </section>
  
        <section className="contact-info">
          <h2 className="contact-info__title">Información de Contacto</h2>
          <p className="contact-info__text">Teléfono: 1160397216</p>
          <p className="contact-info__text">Dirección: Andrés Baranda 1967, Quilmes</p>
        </section>
      </div>
    );
  };
  
  export default ContactSection;