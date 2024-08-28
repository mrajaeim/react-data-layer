import { useEffect, useState } from 'react';
import { networkGetPeopleList } from "./network/people"
import PeopleTable from './PeopleTable';

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
        <PeopleTable data={data} />
      </div>
    </>
  );
}

export default App;
