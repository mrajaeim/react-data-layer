import GenderCell from "./GenderCell";

export default function PeopleTable({ data }) {
  if (!data) return null;
  return (
    <table className="table">
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>
              <GenderCell gender={row.gender} />
            </td>
          </tr>))}
      </tbody>
    </table>
  );
}