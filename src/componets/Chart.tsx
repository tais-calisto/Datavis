import { DSVRowArray, csv } from 'd3';
import { useEffect, useState } from 'react';

function Chart() {
  const [data, setData] = useState<DSVRowArray<string>>();

  const csvUrl =
    'https://gist.githubusercontent.com/tais-calisto/e5767fd21c6018c3a5b4151b8a899846/raw/cssNameColors.csv';

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return (
    <div>
      {data
        ? data.map((d, index) => <p key={index}>{d.colorName}</p>)
        : 'Carregando'}
    </div>
  );
}

export default Chart;
