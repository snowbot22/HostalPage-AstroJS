import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  tel: "",
  room: "",
  checkIn: "",
  checkOut: "",
};

const validationsForm = (form) => {
  let errors = {};
  let namePattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let emailPattern = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let phonePattern = /^[0-9]+$/;
  let commendPattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ0-9 ]+$/;

  if (!form.name.trim()) {
    errors.name = "El nombre es obligatorio";
  } else if (!namePattern.test(form.name)) {
    errors.name = "El nombre solo puede contener letras y espacios";
  }
 
  if (!form.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!emailPattern.test(form.email)) {
    errors.email = "El email no es válido";
  }

  if (!form.tel.trim()) {
    errors.tel = "El teléfono es obligatorio";
  } else if (!phonePattern.test(form.tel)) {
    errors.tel = "El teléfono solo puede contener números";
  }

  
  if (!form.checkIn.trim()) {
    errors.guests = "El número de invitados es obligatorio";
  } 
  if (!form.checkOut.trim()) {
    errors.date = "La fecha es obligatoria";
  }


  return errors;
};

export const Form = () => {
  const {
    form, 
    errors, 
    loading, 
    response,
    handleChange, 
    handleBlur, 
    handleSubmit} = useForm(initialForm,validationsForm) 
 

  return (
    <form  onSubmit={handleSubmit} className="form">
      <input type="hidden" name="_cc" value={form._cc} onChange={handleChange} onBlur={handleBlur} onSubmit={handleSubmit} />
      <div className="container">
        <label className="container__label" htmlFor="name">
          Nombre <span className="color--red">*</span>
        </label>
        <input
          className="container__input"
          type="text"
          name="name"
          placeholder="Escribe tu nombre aqui"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="container">
        <label className="container__label" htmlFor="name">
          Dirección de Correo Electrónico <span className="color--red">*</span>
        </label>
        <input
          className="container__input"
          type="email"
          name="email"
          placeholder="Escribe tu email aqui"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="container">
        <label className="container__label" htmlFor="name">
          Número de Telefono <span className="color--red">*</span>
        </label>
        <input
          className="container__input"
          type="tel"
          name="tel"
          placeholder="Escribe tu número de telefono aqui"
          value={form.tel}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.tel && <span className="error">{errors.tel}</span>}
      </div>
      <div className="container">
        <label className="container__label" htmlFor="name">
          Tipo de Habitación: <span className="color--red">*</span>
        </label>
        <select
          className="container__input"
          type="room"
          name="room"
          placeholder="Escribe el tipo de evento que deseas realizar"
          value={form.event}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
        <option value="" disabled>
          Seleccione una opción
        </option>
        <option value="Litera en habitación compartida masculina">
          Litera en habitación compartida masculina
        </option>
        <option value="Habitación Individual con baño compartido">
          Habitación Individual con baño compartido
        </option>
        <option value="Habitación con baño compartido - Cama grande">
          Habitación con baño compartido - Cama grande
        </option>
        <option value="Litera en habitación compartida mixta">
          Litera en habitación compartida mixta
        </option>
        <option value="Litera en habitación compartida - Solo mujeres">
          Litera en habitación compartida - Solo mujeres
        </option>
        <option value="Habitación Doble - 2 camas">
          Habitación Doble - 2 camas
        </option>
        </select>
        {errors.event && <span className="error">{errors.event}</span>}
      </div>
      <div className="container">
        <label className="container__label" htmlFor="name">
          Fecha de Check-In <span className="color--red">*</span>
        </label>
        <input
          className="container__input"
          type="date"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.guests && <span className="error">{errors.guests}</span>}
      </div>
      <div className="container">
        <label className="container__label" htmlFor="name">
          Fecha de Check-Out <span className="color--red">*</span>
        </label>
        <input
          className="container__input"
          type="date"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>
      { loading && 
        <div className="loading">
          <p>Enviando datos...</p>
        </div>
      }
      { response &&
        <div className="success">
          <p>El formulario ha sido enviado!</p>
        </div>
      }
      <button type="Submit" className="form__button">
        Enviar
      </button>
    </form>
  );
};

export default Form;