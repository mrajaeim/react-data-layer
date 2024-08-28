import { useEffect, useState } from 'react';
import GenderCell from './GenderCell';
import { networkGetPeopleList } from "./network/people"

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    networkGetPeopleList().then((res) => {
      res.json().then((data) => {
        setData(data.results);
        setCount(data.count);
      });
    });
  }, []);

  return (
    <>
      <button className="btn">All count is {count}</button>
      <div className="divider" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {data &&
              data.map((row) => (
                <tr>
                  <td>{row.name}</td>
                  <td>
                    <GenderCell gender={row.gender} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
