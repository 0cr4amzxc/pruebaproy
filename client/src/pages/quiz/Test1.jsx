import React from "react";
import { useEffect, useState } from "react";

function test1() {
  useEffect(() => {
    questions.map(() => {
      setInputValues((inputValues) => [...inputValues, 0]);
    });
  }, []);

  const questions = [
    "¿Sientes que tu pareja constantemente te está controlando “por amor?",
    "¿Te acusa de infidelidad o de que actúas en forma sospechosa?",
    "¿Has perdido contacto con amigos, familiares, compañeras/os de tu escuela o trabajo para evitar que tu pareja se moleste?",
    "¿Te critica y humilla en público o en privado, opina negativamente sobre tu apariencia, tu forma de ser o el modo en que te vistes?",
    "¿Tu pareja tiene cambios bruscos de humor o se comporta distinto contigo en público, como si fuera otra persona?",
    "¿Sientes que está en permanente tensión y que, hagas lo que hagas, el se irrita o te culpabiliza de sus cambios?",
    "¿Te ha golpeado con sus manos, te ha jaloneado o te ha lanzado cosas cuando se enoja o cuando discuten?",
    "¿Te ha amenazado alguna vez con un objeto o armas, o con matarse él, a ti o a algún miembro de la familia si no le obedeces?",
    "¿Sientes que cedes a sus peticiones sexuales por temor, o te ha forzado a tener relaciones, amenazándote que si no tiene relaciones contigo, entonces se va con otra?",
    "Después de un episodio violento, ¿se muestra cariñoso y atento, te regala cosas y te promete que nunca más volverá a pegarte o insultarte y te dice que “todo cambiará”?",
    "¿Has buscado o has recibido ayuda por lesiones que él te ha causado? (primeros auxilios, atención médica o legal)",
    "¿Es violento con otras personas o se pelea a golpes con otros hombres?",
  ];
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues]; // Clonar el array actual
    newInputValues[index] = event.target.value; // Actualizar el valor en el índice dado
    setInputValues(newInputValues); // Actualizar el estado con el nuevo array

    console.log(newInputValues[index]);
  };

  const checkAnswers = () => {
    const sum = inputValues.reduce(
      (acc, value) => acc + parseInt(value, 10),
      0
    );
    console.log("Suma de los valores:", sum);
    if (sum <= 5) {
      document.getElementById("my_modal_1").showModal();
    } else if (sum <= 15) {
      document.getElementById("my_modal_2").showModal();
    } else if (sum <= 25) {
      document.getElementById("my_modal_3").showModal();
    } else {
      document.getElementById("my_modal_4").showModal();
    }
  };

  return (
    <>
      <div className="container rounded-2xl p-6 border-2 border-primary">
        <div className="container flex flex-col items-center sm:items-start gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-message-circle-question"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15.02 19.52c-2.341 .736 -5 .606 -7.32 -.52l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.649 1.407 2.575 3.253 2.742 5.152" />
              <path d="M19 22v.01" />
              <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            </svg>
            <span className="text-lg sm:text-2xl">
              ¿Alguna vez has sido victima de violencia en tu noviazgo?
            </span>
          </div>

          {questions.map((question, index) => (
            <div className="form-control w-4/5" key={index}>
              <label htmlFor="nombreEvento" className="label">
                <span className="label-text">{`${index+1}. ${question}`}</span>
              </label>
              <input
                key={index}
                type="range"
                min={0}
                max={3}
                value={inputValues[index]}
                onChange={(event) => handleInputChange(event, index)}
                className="range range-primary range-sm"
                step="1"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>Si</span>
                <span>A veces</span>
                <span>Rara vez</span>
                <span>No</span>
              </div>
            </div>
          ))}

          <div className="card-actions justify-end">
            <button onClick={checkAnswers} className="btn btn-accent">
              enviar
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-success text-base-100 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>RELACIÓN NO ABUSIVA</span>
                <p className="text-justify text-xs">
                  Tal vez existan algunos problemas que de manera común
                  presentan entre las parejas, pero se resuelven sin violencia.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-info text-base-100 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>PLATICA CON TU PAREJA</span>
                <p className="text-justify text-xs">
                  Muchas parejas tienen diferencias, tal vez sea mejor que
                  revises las reglas de tu relación.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-warning text-base-100 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>

                <span>ESTÁ VIVIENDO VIOLENCIA</span>
                <p className="text-justify text-xs">
                  Tu relación tiene señales de abuso de poder
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>

            <dialog id="my_modal_4" className="modal">
              <div className="modal-box bg-error text-base-100 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>¡CUIDADO!</span>
                <p className="text-justify text-xs">
                  Pide asesoría y apoyo, tu seguridad puede estar en riesgo.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default test1;
