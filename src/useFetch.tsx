import { useEffect, useState } from "react";


const useFetch = (url:string) => {
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [data, setData] = useState<{
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    }[]>([]);
    useEffect(() => {
        const abort = new AbortController();
      fetch(url,{signal:abort.signal})
        .then((res) => res.json())
        .then((data) => {       
          setData(data)
          setIsLoading(false)
        })
        .catch((err) => console.log(err));
        return () => abort.abort()
    }, [url]);

    return {data, isLoading}
}

export default useFetch

