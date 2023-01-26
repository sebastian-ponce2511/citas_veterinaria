const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const handleBorrar = () => {
    confirm("¿Desea eliminar este paciente?");
    if (confirm) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-3 mb-5 bg-white shadow-md px-5 py-6 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-8">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 py-2 px-10 text-white uppercase font-bold rounded-lg"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 py-2 px-10 text-white uppercase font-bold rounded-lg"
          type="button"
          onClick={handleBorrar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
