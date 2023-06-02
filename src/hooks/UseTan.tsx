

import {QueryClient , QueryClientProvider ,useQuery} from "@tanstack/react-query"

import { getData } from "../utils/API";

export const useTan = () =>{
const { isLoading,data  } = useQuery({
    queryFn : getData,
    queryKey : ["data"]
})

return {data , isLoading} as const
}