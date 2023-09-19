import { useEffect, useState } from 'react';

function Numbers() {
  const [result, setResult] = useState<number[]>([]);
  const [alert, setAlert] = useState(false);

  function luckyNumber() {
    const sortNumbers:number[] = [];
    setResult([]);
    for (let i = 0; i < 60; i++) {
      const num:number = Math.floor(Math.random() * 60 + 1);
      if (!sortNumbers.includes(num)) {
        sortNumbers.push(num);
      } if (sortNumbers.length > 5) {
        break;
      }
    }
    setResult([...sortNumbers]);
    sortNumbers.length = 0;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.toString());
    setTimeout(() => {
      setAlert(false);
    }, 5000);
    setAlert(true);
  };

  useEffect(() => {
    luckyNumber();
  }, []);

  return (
    <div
      className="flex-col w-100 text-center bg-gray-500 p-5 sm:rounded-xl
                  sm:m-5 dark:bg-gray-800"
    >
      <h2 className="text-gray-100">Seus números da sorte da Mega-Sena são:</h2>
      <ul className="flex justify-center gap-3 mb-5 text-gray-100 my-2 sm:gap-5">
        {
          result.map((number) => (
            <li
              className="p-2 w-14 text-center rounded text-lg bg-green-500
                        sm:p-3"
              key={ number }
            >
              {number < 10 ? `0${number}` : number}
            </li>))
        }
      </ul>
      <button
        onClick={ luckyNumber }
        className="m-5 w-40 bg-blue-500 hover:bg-blue-700
                  text-white font-bold py-2 px-4 rounded"
      >
        Sort
      </button>
      <button
        onClick={ copyToClipboard }
        className="m-5 w-40 bg-transparent hover:bg-blue-500
                  text-blue-300 font-semibold hover:text-white
                  py-2 px-4 border border-blue-500 hover:border-transparent
                  rounded"
      >
        Copiar
      </button>
      {
        alert && <p className="text-gray-100 opacity-50">numeros copiados com sucesso!</p>
      }
    </div>
  );
}

export default Numbers;
