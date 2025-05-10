import React from "react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primeflex/primeflex.css"
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const App = () => {
    return (
        <PrimeReactProvider>
        <div class="flex justify-content-center align-items-center flex-column md:shadow-8 p-5 bg-white border-round-lg" style={{ width: "20%", height: "200px", margin: "auto", marginTop: "190px",}}>
            <div class="">
                <h1 class="" >Login</h1>
                <div class="m-2 flex">
                    <label class="" htmlFor="email">Email:</label>
                    <InputText
                    class=""
                    id="email"
                    type="text"
                    />
                </div>
                <div class="m-2 flex">
                    <label class="" htmlFor="senha">Senha:</label>
                    <Password
                    class=""
                    id="senha" 
                    />
                </div>
                <div class=" flex justify-content-center">
                <Button class="" label="Entrar" severity="success" />
                </div>
                </div>
        </div>
        </PrimeReactProvider>
    );
};

export default App;