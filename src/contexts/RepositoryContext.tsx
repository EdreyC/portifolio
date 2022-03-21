import axios from "axios";
import { createContext, ReactNode } from "react";
import { useQuery } from "react-query";

type Repository ={
    
    full_name: string;
    name:string;
    downloads_url:string;
    html_url:string;
    description: string;
    owner:{
        avatar_url:string;
    }
} 
type RepositoryContextType={

    data: Repository[] | undefined;
    isFetching: boolean;
}
type RepositoryContextProps={
    children: ReactNode;
}


export const RepositoryContext = createContext({} as RepositoryContextType )

export function RepositoryContextProvider(props:RepositoryContextProps ){
    const { data, isFetching } = useQuery<Repository[] | undefined>('repos', async () => {
        const response = await axios.get('https://api.github.com/users/EdreyC/repos')
        console.log(response.data)
        return response.data
    })
    return(
        <RepositoryContext.Provider value={{ data, isFetching }}>
        {props.children}
      </RepositoryContext.Provider>  
    )
}