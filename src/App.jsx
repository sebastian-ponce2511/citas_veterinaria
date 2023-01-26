import { useEffect, useState } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import ListadoPacientes from "./componentes/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem("pacientes"));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const eliminar = pacientes.filter(
      (pacienteBorrar) => pacienteBorrar.id !== id
    );
    setPacientes(eliminar);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex gap-3">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
