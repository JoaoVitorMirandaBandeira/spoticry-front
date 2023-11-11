import React from "react";
import { LoadingContainer, ImageLoading, TextLoading } from "./Style";
import loader from "../../assets/loader.gif";

export const Loading = () => {
    return(
        <LoadingContainer>
            <ImageLoading src={loader} alt="Logo de teste"/>
            <TextLoading>Carregando . . .</TextLoading>
        </LoadingContainer> 
    )
}