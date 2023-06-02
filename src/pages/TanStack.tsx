import React from 'react'

import {QueryClient , QueryClientProvider} from "@tanstack/react-query"

const TanStack = () => {

    const client = new QueryClient()

  return (
    <div>
        <QueryClientProvider client={client}>
<div>hheeee</div>
        </QueryClientProvider>
    </div>
  )
}

export default TanStack