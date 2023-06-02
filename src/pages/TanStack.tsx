import React from 'react'

import {QueryClient , QueryClientProvider} from "@tanstack/react-query"
import { useTan } from '../hooks/UseTan'

const TanStack = () => {

    const client = new QueryClient()
    const read = useTan()
    // const {data , isLoading} =read

  return (
    <div>
        <QueryClientProvider client={client}>
<div>hheeee</div>
        </QueryClientProvider>
    </div>
  )
}

export default TanStack