import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (hasErrors) {
      return;
    }

    const endpoint = 'https://api.web3forms.com/submit';
    const accessKey = '160599cd-bdc1-4c0e-8812-2140ece05961';

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch(endpoint, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Reset the form values after successful submission
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <section className="container is-max-widescreen">
      <section className="section is-medium">
        <h1 className="title has-text-link">Contact me</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="160599cd-bdc1-4c0e-8812-2140ece05961" />
          <div className="field">
            <label className="label">Name:</label>
            <input
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              type="text"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="field">
            <label className="label">Email:</label>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              type="email"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="field">
            <label className="label">Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="textarea"
              rows="10"
            />
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button type="submit" className="button is-link">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default ContactForm;