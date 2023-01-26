import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes.length === 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      )}

      {pacientes.map((paciente) => (
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
    </div>
  );
};

export default ListadoPacientes;
