import { Calendar, dayjsLocalizer } from "react-big-calendar"; // importa la biblioteca de calendario interactivo con el componente Calendar, para mostrar el calendario y dayjsLocalizer para localizar las fechas
import dayjs from "dayjs"; // librería de manipulación de fechas y horas
import "react-big-calendar/lib/css/react-big-calendar.css"; // importa los estilos predeterminados del calendario

function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-04-16T12:00:00").toDate(),
      end: dayjs("2024-04-16T13:00:00").toDate(),
      title: "Evento 1",
    },
  ];

  return (
    <>
      <Calendar
        localizer={localizer}
        style={{ height: 700, width: 800 }}
        events={events}
        /* views={["month", "week", "day"]} */
      />
    </>
  );
}
export default App;
