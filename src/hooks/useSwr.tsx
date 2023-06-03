
import useSwr from "swr"
import {QueryClient , QueryClientProvider ,useQuery} from "@tanstack/react-query"

import { getData } from "../utils/API";

export const useFetchSwr = () =>{
const { isLoading,data  } = useSwr(
    "data" , getData,
    
)

return {data , isLoading} as const
}