import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36).substring(2);

    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      };

      if (paciente.id) {
        //Editar
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteAct) =>
          pacienteAct.id === paciente.id ? objetoPaciente : pacienteAct
        );

        setPacientes(pacientesActualizados);
        //Limpieza de state
        setPaciente({});
      } else {
        //Nuevo Registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      setNombre("");
      setPropietario("");
      setEmail("");
      setAlta("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-8">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg text-center mt-5 mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg"
            type="text"
            placeholder="Nombre de la mascota"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg"
            type="email"
            placeholder="Nombre de la mascota"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            className="border-2 p-2 mt-2 w-full"
            type="date"
            placeholder="Nombre de la mascota"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 p-2 mt-2 w-full rounded-lg"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer rounded-lg hover:bg-indigo-700"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
