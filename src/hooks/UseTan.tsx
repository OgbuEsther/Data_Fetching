

import {QueryClient , QueryClientProvider ,useQuery} from "@tanstack/react-query"

import { getData } from "../utils/API";

export const useTan = () =>{
const {data , isLoading} = useQuery({
    queryFn : getData,
    queryKey : ["data"]
})

return [data , isLoading] as const
}