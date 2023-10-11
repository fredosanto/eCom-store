import { useEffect } from "react";

export default function useApiFetch(url) {
  const [data, setData] = useState([]);
  const [state, setState] = useState("idle");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        setData(json);
        setState("success");
      } catch {
        setState("error");
      }
    }
  }, [url]);

  return { data, state };
}
